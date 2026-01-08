"use client";

import { AdminPageTitle } from "@/components/admin/Title";
import { SettingsForm } from "@/app/admin/settings/SettingsForm";
import Text from "@/components/ui/text";
import { SvgSettings } from "@opal/icons";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("admin.pages.settings");

  return (
    <>
      <AdminPageTitle title={t("title")} icon={SvgSettings} />

      <Text className="mb-8">{t("description")}</Text>

      <SettingsForm />
    </>
  );
}
