import styled from "styled-components";

const handleChooseType = (type) => {
    switch (type) {
        case "xl":
            return "1600px"
        case "lg":
            return "1200px"
        case "xs":
            return "800px"
        case "sm":
            return "400px"
    }
}

export const Container = styled.div`
  width: 100%;
  padding: 0 20px;
  margin: 0 20px;
  max-width: ${(props) => handleChooseType(props.type)};
`