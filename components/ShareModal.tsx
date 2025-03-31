'use client';

// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
//   } from "@/components/ui/dialog"

import { useSelf } from '@liveblocks/react/suspense'
import React, { useState } from 'react'

const ShareModal = ({roomId, collaborators, creatorId, currentUserType }: ShareDocumentDialogProps) => {
    const user = useSelf();
  
    const [loading, setloading] = useState(false)
    const [open, setOpen] = useState(false)

    const [email, setEmail] = useState('');
    const [userType, setUserType] = useState<UserType>('viewer');

    const shareDocumentHandler = async () => {}

  return (
    // <Dialog>
    //     <DialogTrigger>Open</DialogTrigger>
    //     <DialogContent>
    //         <DialogHeader>
    //         <DialogTitle>Are you absolutely sure?</DialogTitle>
    //         <DialogDescription>
    //             This action cannot be undone. This will permanently delete your account
    //             and remove your data from our servers.
    //         </DialogDescription>
    //         </DialogHeader>
    //     </DialogContent>
    // </Dialog>
    <div>asch</div>
  )
}

export default ShareModal