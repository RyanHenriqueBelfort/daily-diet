import { useState, useEffect } from "react";
import { Text } from "react-native";

import { useRoute} from "@react-navigation/native";

import { Main, Text as TextStyled, Image, Ilustration } from "./style";
import theme from "../../theme";
import imageSuccess from "../../assets/illustration.png";
import imageFail from "../../assets/illustrationFail.png";
import { Button } from "../../components/Button";

type Diet = {
  onDiet: boolean;
};

export function Feedback() {
  const route = useRoute()
  const params = route.params

  const [diet, setDiet] = useState(true);

  useEffect(() => {
    setDiet(params?.onDiet)
  }, [])

  return (
    <>
      {diet ? (
        <Main>
          <TextStyled>Continue assim!</TextStyled>
          <Text>
            Você continua{" "}
            <Text style={{ fontFamily: theme.FONT_FAMILY.BOLD }}>
              dentro da dieta
            </Text>
            . Muito bem!
          </Text>
          <Ilustration>
            <Image source={imageSuccess} />
          </Ilustration>
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
              saiu da dieta{" "}
            </Text>
            dessa vez, mas continue se esforçando e não desista!
          </Text>
          <Ilustration>
            <Image source={imageFail} />
          </Ilustration>
          <Button name="Ir para página inicial" navigate="Main" />
        </Main>
      )}
    </>
  );
}
