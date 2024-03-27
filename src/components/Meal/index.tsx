import React, { memo } from "react";
import { Text, View, TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Content, HourText, Divider, Status, colorStyleStatus } from "./style";
import theme from "../../theme";
import { formatDate } from "../../util/FormatDate";

type MealProps = TouchableOpacityProps & {
  hour: string;
  name: string;
  status: colorStyleStatus;
  press: () => void;
  teste: string;
  date: string;
};

function Meal({
  hour,
  name,
  status = "PRIMARY",
  press,
  teste,
  date,
  ...rest
}: MealProps) {
  const navigation = useNavigation();

  const handleNavigate = () => {
    press();
  };

  return (
    <>
      <Text
        style={{
          fontFamily: theme.FONT_FAMILY.BOLD,
          fontSize: theme.FONT_SIZE.SM,
          marginTop: 15,
        }}
      >
        {formatDate(date)}
      </Text>

      <Content onPress={handleNavigate}>
        <HourText>{hour}</HourText>
        <Divider
          style={{ borderLeftWidth: 1, borderColor: theme.COLORS.GRAY_400 }}
        >
          <Text style={{ fontSize: theme.FONT_SIZE.MD }}>{name}</Text>
          <Status color={status} />
        </Divider>
      </Content>
    </>
  );
}

export default memo(Meal);
