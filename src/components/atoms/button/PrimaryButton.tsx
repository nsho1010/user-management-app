import { Button } from "@chakra-ui/react"
import { FC, ReactNode } from "react"


type Props = {
    children: ReactNode
}

export const PrimaryButton:FC<Props> = (props) => {
    const { children } = props;
    return (
        <Button bg='teal.400' color='white' _hover={{opacity:0.8}}>{children}</Button>

    )
}