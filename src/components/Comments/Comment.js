import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";

export default function Comment({data}) {
    if(data.comments) console.log(data.comments[0])
    return (
        <CardComment>
            {data.comments ? <>
                <ContentComment>
                    <img src={data.comments[0].user.avatar} alt=""/>
                    <div>
                        <h6>{data.comments[0].user.username}</h6>
                        <p>{data.comments[0].text}</p>
                    </div>
                </ContentComment>
                <ContentComment>
                <img src={data.comments[0].user.avatar} alt=""/>
                <div>
                    <h6>{data.comments[0].user.username}</h6>
                    <p>{data.comments[0].text}</p>
                </div>
            </ContentComment></>
            :
               ""
            }
        </CardComment>
    );
}

const CardComment = styled.div`
    margin-top: 12px;
`;

const ContentComment = styled.div`
    display: flex;
    font-family: Lato;
    font-size: 14px;
    line-height: 17px;
    word-break: break-word;
    margin-bottom: 15px;
    width: 571px;
	border-bottom: 1px solid #353535;
    div{
        margin-left: 18px;
        margin-bottom: 19px;
    }
    h6{
        font-weight: 700;
        color: #F3F3F3;
    }
    p{
        font-weight: 400;
        color: #ACACAC;
    }
`;
