import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export type colorStyleStatus = "PRIMARY" | "SECONDARY";
export type buttonWhite = "TRUE" | "FALSE";

type PropsButton = {
  color: buttonWhite;
};

type Props = {
  color: colorStyleStatus;
};

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({ theme, color }) =>
    color === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  position: relative;
  height: 100%;
`;

export const Header = styled.View`
  display: flex;
  padding: 24px;
`;

export const TextCenter = styled.Text`
  position: absolute;
  top: 24px;
  right: 45%;
  font-size: 18px;
  align-items: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Main = styled.View`
  padding-left: 24px;
  padding-right: 24px;
  gap: 12px;
  display: flex;
  flex: 1;
  padding-top: 33px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  justify-content: space-between;
`;

export const Content = styled.View`
  /* margin-top: 40px; */
`;
export const Name = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Subscription = styled.Text`
  margin-top: 8px;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  margin-bottom: 24px;
`;

export const Date = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-bottom: 8px;
`;

export const Tag = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 32px;
  width: 144px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 16px;
  padding-left: 16px;
  border-radius: 1000px;
`;
export const Status = styled.View<Props>`
  margin-right: 8px;
  width: 8px;
  height: 8px;
  border-radius: 100px;
  background-color: ${({ theme, color }) =>
    color === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const ContentButtons = styled.View`
  margin-bottom: 21px;
  gap: 10px;
`;
export const ContentViewModal = styled.View`
  padding-top: 40px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 21px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const TextModal = styled.Text`
  text-align: center;
  padding-left: 42px;
  padding-right: 42px;
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-bottom: 32px;
`;

export const ViewButtonsModal = styled.View`
  flex-direction: row;
  gap: 15px;
`

export const ButtonModal = styled.TouchableOpacity<PropsButton>`
  width: 135px;
  padding: 16px 24px;
  border-radius: 6px;
  background-color: ${({ theme, color }) =>
    color === "FALSE" ? theme.COLORS.GRAY_600 : theme.COLORS.WHITE};
  border-width: ${({ color }) => (color === "TRUE" ? 1 : 0)}px;
`;
export const TextCenterButton = styled.Text<PropsButton>`
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  text-align: center;
  color: ${({ theme, color }) =>
    color === "FALSE" ? theme.COLORS.GRAY_100 : theme.COLORS.GRAY_600};
`;
