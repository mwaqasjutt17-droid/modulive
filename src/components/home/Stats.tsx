export default function Stats() {
  const stats = [
    { label: 'Products that we have recently launched on this market', value: '700+' },
    { label: 'Customers who buy from friends and have some back', value: '95%' },
  ];

  return (
    <section className="px-4 md:px-6 py-12 md:py-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      {stats.map((stat, i) => (
        <div key={i} className="text-center md:text-left space-y-3 md:space-y-4">
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading">{stat.value}</div>
          <p className="text-xs sm:text-sm text-brand-primary/50 leading-relaxed max-w-xs mx-auto md:mx-0">
            {stat.label}
          </p>
        </div>
      ))}
    </section>
  );
}
