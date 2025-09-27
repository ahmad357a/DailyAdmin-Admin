import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Daily Lucky Draws",
    description: "Enter with just $2 and win exciting prizes every day.",
  },
  {
    title: "Instant Participation",
    description: "Join draws in seconds. Smooth and mobile-friendly experience.",
  },
  {
    title: "Transparent Winners",
    description: "Fair selection with visible winner announcements.",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-8">
          Why Choose Daily Earn
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="p-6 border rounded-xl bg-card">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">{f.title}</h3>
                  <p className="text-muted-foreground">{f.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
