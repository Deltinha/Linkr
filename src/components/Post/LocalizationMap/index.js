import { useState } from "react";
import { MdLocationOn, MdClose } from 'react-icons/md';
import { Map, Marker} from "pigeon-maps";
import { MapModal, IconBox, CloseIcon, Content, Infos, ContentMap } from "./style"

export default function Localization({coordinates, user}) {
  
    const [clicked,setClicked] = useState(false);

    return (        
        coordinates ?
        <>
            <IconBox onClick={() => setClicked(true)}>
                <MdLocationOn fontSize="20px"/>
            </IconBox>
            <MapModal
                isOpen={clicked}
                onEscapeKeydown={()=>setClicked(false)}
            >
                <Content>
                    <Infos>
                        <h6>{user}'s location</h6>
                        <CloseIcon>
                            <MdClose onClick={() => setClicked(false)}
                                color="#fff"
                                fontSize="30px" 
                            />
                        </CloseIcon>
                    </Infos>
                    <ContentMap>
                        <Map
                            height="100%"
                            defaultCenter={
                                [parseFloat(coordinates.latitude), parseFloat(coordinates.longitude)]
                            }
                            defaultZoom={12}
                        >
                            <Marker
                                width={25}
                                anchor={
                                    [parseFloat(coordinates.latitude), parseFloat(coordinates.longitude)]
                                }
                            />

                        </Map>
                    </ContentMap>   
                </Content>
            </MapModal>
        </>
        :
            ""
    );
}
