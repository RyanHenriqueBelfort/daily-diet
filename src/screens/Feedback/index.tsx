import { useState } from "react";
import { Text } from "react-native";

import { Main, Text as TextStyled, Image } from "./style";
import theme from "../../theme";
import imageSuccess from "../../assets/illustration.png";
import imageFail from "../../assets/illustrationFail.png";
import { Button } from "../../components/Button";

type Diet = {
  onDiet: "onDiet" | "offdiet";
};

export function Feedback() {
  const [onDiet, setOnDiet] = useState(false);


  return (
    <>
      {onDiet ? (
        <Main>
          <TextStyled>Continue assim!</TextStyled>
          <Text>
            Você continua{" "}
            <Text style={{ fontFamily: theme.FONT_FAMILY.BOLD }}>
              dentro da dieta
            </Text>
            . Muito bem!
          </Text>
          <Image source={imageSuccess} />
          <Button name="Ir para página inicial" navigate="Main" />
        </Main>
      ) : (
        <Main>
          <TextStyled style={{ color: theme.COLORS.RED_DARK }}>
            Que pena!
          </TextStyled>
          <Text style={{ textAlign: "center" }}>
            Você{" "}
            <Text style={{ fontFamily: theme.FONT_FAMILY.BOLD }}>
              dentro da dieta
            </Text>
            dessa vez, mas continue se esforçando e não desista!
          </Text>
          <Image source={imageFail} />
          <Button name="Ir para página inicial" navigate="Main" />
        </Main>
      )}
    </>
  );
}
