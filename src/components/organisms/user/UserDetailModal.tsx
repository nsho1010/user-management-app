import { FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack } from "@chakra-ui/react";
import { FC, memo } from "react"

type Props = {
    isOpen : boolean;
    onClose : () => void;
}


export const UserDetailModal:FC<Props>= memo (((props) => {
    const { isOpen , onClose} = props;

    return (
        <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
            <ModalOverlay/>
            <ModalContent pb={6}>
                <ModalHeader>モーダル詳細</ModalHeader>
                <ModalCloseButton/>
                <ModalBody mx={4}>
                    <Stack spacing={4}>
                        <FormControl>
                            <FormLabel>名前</FormLabel>
                            <Input value='しょうへい' isReadOnly/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>フルネーム</FormLabel>
                            <Input value='shohei nagamura' isReadOnly/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input value='shohei.nagamura@gmail.com' isReadOnly/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>TEL</FormLabel>
                            <Input value='xxx-xxxx-xxxx' isReadOnly/>
                        </FormControl>
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}))