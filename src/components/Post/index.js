import LikeButton from './LikeButton';
import { useHistory } from 'react-router-dom';
import RePost from '../RePost';
import { postDislike, postLike } from '../../services/linkr-api';
import { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import CommentsButton from './CommentButton';
import Comments from '../Comments';
import LinksCard from './LinkCard';
import DescriptionPost from './DescriptionPost';
import HeadPost from './HeadPost';
import Localization from './LocalizationMap';
import {
  PostContents,
  PostUserName,
  MainPostContainer,
  ProfilePic,
  AvatarAndLikesContainer,
  PostWrapper,
  HeadCard,
} from './style';

export default function Post({ data, poster, likes, fetchPosts }) {
  const { text, link, linkTitle, linkDescription, linkImage, id } = data;
  const history = useHistory();
  const token = localStorage.getItem('token');
  const userID = localStorage.getItem('userID');
  const [clickComment, setClickComment] = useState(false);
  const [likedByMe, setLikedByMe] = useState(
    Boolean(likes.find((like) => like['user.id'] === Number(userID)))
  );
  const [likesCount, setLikesCount] = useState(likes.length);
  const [tooltipText, setTooltipText] = useState('');

  function toggleLikeButton() {
    if (likedByMe) {
      setLikesCount(likesCount - 1);
      setLikedByMe(false);
      postDislike({ id, token })
        .then(() => null)
        .catch(() => {
          setLikedByMe(true);
          setLikesCount(likesCount + 1);
        });
    } else {
      setLikesCount(likesCount + 1);
      setLikedByMe(true);
      postLike({ id, token })
        .then(() => null)
        .catch(() => {
          setLikedByMe(false);
          setLikesCount(likesCount - 1);
        });
    }
  }

  function fillLikedByMe() {
    likes.forEach((like) => {
      if (like.userId === Number(userID)) {
        setLikedByMe(true);
      }
    });
    generatelikeTooltipText();
  }

  function goToPosterPage() {
    history.push(`/user/${poster.id}`);
  }

  function openLink() {
    window.open(link);
  }

  function generatelikeTooltipText() {
    if (likesCount === 1) {
      if (likedByMe) {
        setTooltipText('Você.');
      } else {
        setTooltipText(likes[0]['user.username']);
      }
    }

    if (likesCount === 2) {
      if (likedByMe) {
        const findUser = likes.find(
          (like) => like['user.id'] !== Number(userID)
        )['user.username'];
        setTooltipText(`Você e ${findUser}.`);
      } else {
        setTooltipText(
          `${likes[0]['user.username']} e ${likes[1]['user.username']}.`
        );
      }
    }

    if (likesCount >= 3) {
      const filteredUsers = likes.filter(
        (like) => like['user.id'] !== Number(userID)
      );

      if (likedByMe) {
        setTooltipText(
          `Você, ${filteredUsers[0]['user.username']} e outras ${
            likesCount - 2
          } pessoas.`
        );
      } else {
        setTooltipText(
          `${filteredUsers[0]['user.username']}, ${
            filteredUsers[1]['user.username']
          } e outras ${likesCount - 2} pessoas.`
        );
      }
    }
  }

  useEffect(fillLikedByMe, []);
  useEffect(generatelikeTooltipText, [likesCount]);

  return (
    <>
      <PostContents>
        <HeadPost data={data} fetchPosts={fetchPosts} userID={userID} />
        <PostWrapper margin={!clickComment ? '26px' : '0'}>
          <AvatarAndLikesContainer>
            <ProfilePic onClick={goToPosterPage} avatar={poster.avatar} />
            <LikeButton
              toggleSelection={toggleLikeButton}
              likedByMe={likedByMe}
              setLikedByMe={setLikedByMe}
            />

            {likesCount > 0 ? (
              <div>
                <p data-tip data-for={`tolltip${id}`}>
                  {likesCount} likes
                </p>
                <ReactTooltip
                  id={`tolltip${id}`}
                  effect="solid"
                  place="bottom"
                  type="light"
                >
                  <span
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      width: '100px',
                      fontWeight: '700',
                      fontSize: '11px',
                    }}
                  >
                    {tooltipText}
                  </span>
                </ReactTooltip>
              </div>
            ) : (
              <span>{likesCount} likes</span>
            )}

            <RePost data={data} fetchPosts={fetchPosts} />
            <CommentsButton
              state={clickComment}
              toggleButton={setClickComment}
              count={data.commentCount}
            />
          </AvatarAndLikesContainer>
          <MainPostContainer>
            <HeadCard>
              <PostUserName onClick={goToPosterPage}>
                {poster.username}
              </PostUserName>
              <Localization
                coordinates={data.geolocation}
                user={data.user.username}
              />
            </HeadCard>

            <DescriptionPost
              postId={data.user.id}
              userID={userID}
              data={data}
              fetchPosts={fetchPosts}
              id={id}
              text={text}
            />
            <LinksCard
              openLink={openLink}
              linkTitle={linkTitle}
              linkDescription={linkDescription}
              link={link}
              linkImage={linkImage}
            />
          </MainPostContainer>
        </PostWrapper>
        {clickComment ? (
          <Comments
            idPost={data.id}
            idUser={poster.id}
            fetchPosts={fetchPosts}
          />
        ) : (
          ''
        )}
      </PostContents>
    </>
  );
}
