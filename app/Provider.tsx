'use client'

import {
  LiveblocksProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import Loader from '../components/Loader';
import { ReactNode } from "react";



const Provider = ({children}:{children: ReactNode}) => {
  return (
    <LiveblocksProvider authEndpoint='/api/liveblocks-auth'>
        <ClientSideSuspense fallback={<Loader/>}>
          {children}
        </ClientSideSuspense>
    </LiveblocksProvider>
  );
}

export default Provider