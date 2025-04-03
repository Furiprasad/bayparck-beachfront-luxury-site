
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  center = true,
  light = false
}: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
      <h2 className={`heading-lg mb-4 ${light ? 'text-white' : 'text-primary'}`}>{title}</h2>
      {subtitle && (
        <p className={`text-lg max-w-3xl mx-auto ${light ? 'text-white/80' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`w-24 h-1 ${center ? 'mx-auto' : ''} mt-4 ${light ? 'bg-white' : 'bg-secondary'}`}></div>
    </div>
  );
};

export default SectionTitle;
