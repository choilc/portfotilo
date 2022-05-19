import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
const LinkItem = ({ href, target, path, children, ...props }: any) => {
  const active = href === path;
  return (
    <NextLink href={href} passHref>
      <Link
        target={target}
        {...props}
        bg={active ? "blue.300" : undefined}
        padding="0 5px"
        borderRadius="3px"
      >
        {children}
      </Link>
    </NextLink>
  );
};

export default LinkItem;
