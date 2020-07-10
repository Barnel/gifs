import React, {useState} from "react";
import {SearchBoxButton, SearchBoxContainer, SearchBoxInput} from "./UtilsStyledComponents";

interface SearchBoxProps {
    placeholder: string
    onConfirm: (searchTerm: string | undefined) => void
}

export const SearchBox: React.FC<SearchBoxProps> = (props) => {
    const [text, setText] = useState<string | undefined>(undefined)

    return <SearchBoxContainer>
        <SearchBoxInput placeholder={props.placeholder} value={text} onChange={(e) => setText(e.target.value)}/>
        <SearchBoxButton onClick={() => props.onConfirm(text)}>Confirm</SearchBoxButton>
    </SearchBoxContainer>
}
