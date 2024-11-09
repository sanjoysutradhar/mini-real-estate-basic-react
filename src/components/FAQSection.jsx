import FAQuestion from "./FAQuestion";
import SectionHeader from "./SectionHeader";
import SvgDesign from "./SvgDesign";

function FAQSection() {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <SectionHeader
              name="FAQ"
              title="Any Questions? Look Here"
              details="There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form."
            />
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <FAQuestion
              name="Is TailGrids Well-documented?"
              details=" It takes 2-3 weeks to get your first blog post ready. That
                  includes the in-depth research & creation of your monthly
                  content ui/ux strategy that we do writing your first blog
                  post."
            />
            <FAQuestion
              name="Is TailGrids Well-documented?"
              details=" It takes 2-3 weeks to get your first blog post ready. That
                  includes the in-depth research & creation of your monthly
                  content ui/ux strategy that we do writing your first blog
                  post."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <FAQuestion
              name="Is TailGrids Well-documented?"
              details=" It takes 2-3 weeks to get your first blog post ready. That
                  includes the in-depth research & creation of your monthly
                  content ui/ux strategy that we do writing your first blog
                  post."
            />
            <FAQuestion
              name="Is TailGrids Well-documented?"
              details=" It takes 2-3 weeks to get your first blog post ready. That
                  includes the in-depth research & creation of your monthly
                  content ui/ux strategy that we do writing your first blog
                  post."
            />
          </div>
        </div>
      </div>
      <div>
        <span className="absolute left-4 top-4 -z-[1]">
          <SvgDesign />
        </span>
        <span className="absolute bottom-4 right-4 -z-[1]">
          <SvgDesign />
        </span>
      </div>
    </section>
  );
}

export default FAQSection;
