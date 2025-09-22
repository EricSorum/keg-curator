import { Card } from "../ui/card";

type TitleCardProps = {
  title: string;
  subtitle: string;
};

export default function TitleCard({ title, subtitle}: TitleCardProps) {
  return (
    <Card className="py-4 px-8 mb-8 border-amber-200">
      {title.length &&
        <h2 className="text-3xl xs:text-xl font-bold tracking-tight m-3">{title}</h2>
      }
      {subtitle.length &&
        <p className="text-center">{subtitle}</p>
      }
    </Card>
  )
}