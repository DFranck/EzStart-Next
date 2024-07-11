"use client";

import CodeBlock from "@/components/code-block";
import Section from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

const DocGetStarted = () => {
  const t = useTranslations("pages.docs.get-started");
  const variables = t.raw("sections.setup-env.variables") as Array<{
    name: string;
    description: string;
    link?: string;
    code?: string;
  }>;

  const [isHelperOpen, setIsHelperOpen] = useState(false);
  return (
    <>
      <Section id="installation" className="py-0">
        <h2 id="installation">{t("sections.installation.title")}</h2>
        <CodeBlock code={t("sections.installation.steps")} />
      </Section>
      <Section id="setup-env" className="py-0">
        <h2 id="setup-env">{t("sections.setup-env.title")}</h2>
        <CodeBlock code={t("sections.setup-env.steps")} />
        <p
          className="text-muted-foreground text-sm cursor-pointer w-full mb-2"
          onClick={() => setIsHelperOpen(!isHelperOpen)}
        >
          {t("sections.setup-env.helper-cta")}
        </p>
        <div
          className="overflow-hidden transition-all duration-1000 w-full"
          style={{ maxHeight: isHelperOpen ? "500px" : "0px" }}
        >
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="my-0">
                {t("sections.setup-env.helper-title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc">
                {variables.map(({ name, description, link, code }, index) => (
                  <li key={index} id={name}>
                    <a href={link} target="_blank">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="start" className="py-0">
        <h2 className="mt-8 mb-4 ">{t("sections.start.title")}</h2>
        <CodeBlock code={t("sections.start.steps")} />
      </Section>
      <h2 className="">{t("sections.enjoy.title")}</h2>
      <p className="mb-10">{t("sections.enjoy.description")}</p>
      <Section>
        <Button asChild className="w-fit self-end" size={"lg"}>
          <Link href="/docs/internationalization">Internationalization</Link>
        </Button>
      </Section>
    </>
  );
};

export default DocGetStarted;
