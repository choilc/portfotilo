import { Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Link from "next/link";

import { GiBattleTank } from "react-icons/gi";

const LinkWrap = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Logo = () => {
  return (
    <Link href="/" passHref>
      <LinkWrap>
        <GiBattleTank size={20} />
        <Text fontWeight="bold" fontSize="22px">
          Choi Lo
        </Text>
      </LinkWrap>
    </Link>
  );
};

export default Logo;
