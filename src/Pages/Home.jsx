import { Heading, Text, Badge } from "@ninna-ui/primitives";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Menu from "@/components/Menu";

const Home = () => {
  return (
    <>
      <div className="p-8 bg-black">
        <div className="text-white">
          <Menu/>
          </div>
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
