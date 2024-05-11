import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
    onClose:() => void,
    isOpen: boolean;
}

export const MenuDrawer:FC<Props> = memo (( props ) => {
    const {onClose , isOpen} = props;

    return (
        <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
            <DrawerContent>
                <DrawerBody p="0" bg="gray.100">
                    <Button w="100%">トップ</Button>
                    <Button w="100%">ユーザー一覧</Button>
                    <Button w="100%">設定</Button>
                </DrawerBody>
            </DrawerContent>
        </DrawerOverlay>
    </Drawer>
    )
} )