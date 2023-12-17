import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "./button";
import ExternalLinkComponent from "./externalLinkComponent";

const SocialLinksComponent = () => {
  return (
    <div className="flex flex-row gap-3">
      <ExternalLinkComponent to="https://www.linkedin.com/in/arieltroian/">
        <Button
          size="sm"
          variant="ghost"
          className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
        >
          <LinkedInLogoIcon className="w-8 h-auto" />
        </Button>
      </ExternalLinkComponent>

      <ExternalLinkComponent to="https://github.com/arieltroian">
        <Button
          size="sm"
          variant="ghost"
          className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
        >
          <GitHubLogoIcon className="w-8 h-auto" />
        </Button>
      </ExternalLinkComponent>
    </div>
  );
};

export default SocialLinksComponent;
