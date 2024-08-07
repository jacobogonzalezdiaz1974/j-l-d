'use client'


import React, { useRef, useState } from 'react'
import {
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { Editor } from "@/components/editor/Editor";
import Header from "@/components/Header";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import ActiveCollaborators from './ActiveCollaborators';
import { Input } from './ui/input';

const CollaborativeRoom = ({ roomId, roomMetadata }: CollaborativeRoomProps) => {
  
  const [editing, setEditing] = useState(false);
  const [loading, setloading] = useState(false)
  const [documentTitle, setdocumentTitle] = useState(roomMetadata.title)

  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLDivElement>(null)

  return (
    <RoomProvider id={roomId}>
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        <div className="collaborative-room">
          <Header>
            <div ref={containerRef} className="flex w-fit items-center justify-center gap-2">
              {editing && !loading ?(
                <Input 
                  type='text
                  value={documentTitle}
                  ref={inputRef}
                  onChange={(e)=>seDocumentTitle(e.target.value)}
                  onKeyDown={}
                '/>
              ) : (
                  <>
                  <p className='document-title'>{documentTitle}</p>
                  </>
              )}
            </div>
            <div className='flex w-full flex-1 justify-end gap-2 sm:gap-3'>
              <ActiveCollaborators />
               <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
              </SignedIn>
              </div>
          </Header>
          <Editor />
        </div>
      </ClientSideSuspense>
    </RoomProvider>
  );
}

export default CollaborativeRoom