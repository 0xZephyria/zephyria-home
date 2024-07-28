export const Statistics = () => {
  interface statsProps {
    quantity: string;
    description: string;
  }

  const stats: statsProps[] = [
    {
      quantity: "📦",
      description: "Active Nodes",
    },
    {
      quantity: "📜",
      description: "Smart Contracts Deployed",
    },
    {
      quantity: "💱",
      description: "Transactions per Second",
    },
    {
      quantity: "🤝",
      description: "Community Members",
    },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ quantity, description }: statsProps) => (
          <div key={description} className="space-y-2 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">{quantity}</h2>
            <p className="md:text-lg lg:text-xl text-muted-foreground">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
