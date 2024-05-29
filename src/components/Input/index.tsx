import { TextInputProps, TextInput } from "react-native";

import { Container } from "./style";

type Props = TextInputProps & {
    inputRef?: React.RefObject<TextInput>
}

export function Input({inputRef ,...rest}: Props){

    return(
        <Container 
            ref={inputRef}
            {...rest}
        />
    )
}