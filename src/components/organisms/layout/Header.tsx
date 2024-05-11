import { Box,Flex, Heading, Icon, Link, useDisclosure } from "@chakra-ui/react";
import { FC, memo } from "react";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";
import { useNavigate } from "react-router-dom";

export const Header:FC = memo (() => {
    const { isOpen , onOpen , onClose} = useDisclosure();
    const navigate = useNavigate()

    const navigateAndCloseDrawer = (path: string) => {
        navigate(path);
        onClose(); // 閉じる処理を追加
    };

    const onClickHome = () => {
        navigateAndCloseDrawer('/home');
    };

    const onClickSetting = () => {
        navigateAndCloseDrawer('/home/setting');
    };

    const onClickUserManagement = () => {
        navigateAndCloseDrawer('/home/userManagement');
    };

    return (
        <>
        <Flex as="nav" bg="teal.500" color="gray.50" align="center" justify="space-between" padding={{base:3 , md: 5}}>
            <Flex align="center" as="a" mr={8} _hover={{ cursor:"pointer"}} onClick={onClickHome}>
                <Heading as="h1" fontSize={{ base:"md", md:"lg" }}>ユーザー管理アプリ</Heading>
            </Flex>
            <Flex align="center" fontSize="sm" flexGrow={2} display={{base:"none" , md: "flex"}}>
                <Box pr={4} onClick={onClickUserManagement}>
                    <Link>ユーザー一覧</Link>
                </Box>
                <Link onClick={onClickSetting}>設定</Link>
                <Icon></Icon>
            </Flex>
            <MenuIconButton onOpen={onOpen}/>
        </Flex>
        <MenuDrawer isOpen={isOpen} onClose={onClose} onClickHome={onClickHome} onClickSetting={onClickSetting} onClickUserManagement={onClickUserManagement}/>
        </>
    )
} ) 