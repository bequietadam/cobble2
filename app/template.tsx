import Navigation from '@components/Navigation';
import PageTransition from '@components/PageTransition';



export default function Template({ children }: { children: React.ReactNode }) {

  return (
    <div className="w-full flex flex-col">
      <Navigation />
      <div id="container" key="container" className="grow flex flex-col justify-center items-stretch overflow-hidden">
        {children}
      </div>
    </div>
  )

}
