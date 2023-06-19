import PageLayoutWrapper from "./PageLayout.style";

interface PageLayoutProps {
  children: React.ReactNode;
}
export const PageLayout = ({ children }: PageLayoutProps) => (
  <PageLayoutWrapper>{children}</PageLayoutWrapper>
);
