import { Center, Spinner, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import { FC, memo, useCallback, useEffect } from "react";
import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useSelectUser } from '../../hooks/useSelectUser';
import { useAllUsers } from '../../hooks/useAllUsers';
import { useLoginUser } from '../../hooks/useLoginUser';

export const UserManagement:FC = memo (() => {
    const { isOpen , onOpen , onClose} = useDisclosure()
    const { getUsers , loading ,users } = useAllUsers()
    const { onSelectUser, selectedUser } = useSelectUser();
    const { loginUser } = useLoginUser();
    console.log(loginUser)

    useEffect(() => getUsers(),[getUsers]);

    const onClickUser = useCallback((id:number) => {
        console.log(id);
        onSelectUser({id, users ,onOpen});
        onOpen()
    } , [users , onSelectUser, onOpen]);

    return (
        <>
            {loading  ? (
                <Center h='100vh'>
                    <Spinner/>
                </Center>
            ) : (
                <Wrap p={{ base:4 , md: 10}}>
                        {users.map((user) => (
                            <WrapItem key={user.id} mx="auto">
                                <UserCard 
                                    id={user.id}
                                    imageUrl='https://source.unsplash.com/random' 
                                    userName={user.username} 
                                    fullName={user.name}
                                    onClick={onClickUser}
                                />
                            </WrapItem>
                        ))}
                </Wrap>    
            )}
            <UserDetailModal user={selectedUser} isOpen={isOpen} isAdmin={loginUser?.isAdmin} onClose={onClose}/>
        </>
    )
})