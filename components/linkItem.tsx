import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

type Props = {
  href: string;
  target?: string;
  path: string;
} & React.ComponentPropsWithoutRef<"a">;
const LinkItem = ({ href, target, path, children, ...props }: Props) => {
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
