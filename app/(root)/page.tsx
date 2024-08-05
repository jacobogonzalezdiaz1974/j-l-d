import React from 'react'
import Header from '@/components/Header';
import { SignedIn, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import AddDocumentBtn  from '@/components/AddDocumentBtn';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';


const Home = async () => {

  const clerkUser = await currentUser()
  if(!clerkUser) redirect('/sign-in')

  const document = [];

  return (
    <main className="home-container">
      <Header className="sticky left-0 top-0">
        <div className="flex items-center gap-2 lg:gap-4">
          Notification
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>
     {document.length > 0 ? (
        <div className="">
          
      </div>
      ) : (
          <div className="document-list-empty">
            <Image
              src='/assets/icons/doc.svg'
              alt="Document"
              width={40}
              height={40}
              className='mx-auto'
            />
            <AddDocumentBtn
            userId={clerkUser.id}
            email={clerkUser.emailAddresses[0].emailAddress}
            />
          </div>
     )}
    </main>
  )
}

export default Home