import { Heading, Text, Badge } from "@ninna-ui/primitives";
import { ArrowUpIcon, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Home = () => {
  return (
    <>
      <div className="p-8 bg-black">
        <DropdownMenu className="text-black">
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full"><ArrowUpIcon/></Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <Heading as="h1" size="3xl">
          Hello Ninna UI
        </Heading>
        <Text className="text-base-content/70 mt-2">It works!</Text>
        <Button
          variant="outline"
          color="success"
          radius="full"
          className="mt-4 text-white"
        >
          Click me
        </Button>
        <Badge color="success" className="flex items-center gap-1">
          <Check className="size-3" />
          Verified
        </Badge>
      </div>
    </>
  );
};

export default Home;
