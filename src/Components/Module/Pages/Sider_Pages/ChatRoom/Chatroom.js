import React from 'react'
import { ChatStyle } from './ChatStyle';
import {Button }  from "antd"


export default function Notes() {
    return (

        <div >
            <ChatStyle>

                <div >

                    <div>
                        <span className='title-chat'>Chats</span>
                        <span className="create-button"><Button>Create</Button></span>

                    </div>
                    <hr className="border-class" />
                </div>


              </ChatStyle>

        </div>

    )
}
