import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-24 grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <h3 className="mb-6 font-display text-2xl tracking-tight">Rapid Rashmi</h3>
            <p className="mb-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A digital headquarters for media, culture, and craft. Join the weekly journal for
              updates on new podcast episodes, radio highlights, and saree drops.
            </p>
            <form
              className="flex border-b border-foreground py-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="newsletter" className="sr-only">Email address</label>
              <input
                id="newsletter"
                type="email"
                required
                placeholder="Your email address"
                className="w-full bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none"
              />
              <button className="text-[10px] font-bold uppercase tracking-widest">Join</button>
            </form>
          </div>
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="mb-6 font-mono text-[10px] uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link to="/podcasts" className="text-muted-foreground hover:text-primary">Podcasts</Link></li>
              <li><Link to="/radio" className="text-muted-foreground hover:text-primary">Radio</Link></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="mb-6 font-mono text-[10px] uppercase tracking-widest">Heritage</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/sarees" className="text-muted-foreground hover:text-primary">Collections</Link></li>
              <li><Link to="/mobileaccessories" className="text-muted-foreground hover:text-primary">Artisan Story</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Custom Orders</Link></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="mb-6 font-mono text-[10px] uppercase tracking-widest">Connect</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="https://www.instagram.com/rapidrashmi/?hl=en" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">Instagram</a></li>
              <li><a href="https://www.youtube.com/@JustCuriousIndia" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">Curious India - YouTube</a></li>
              <li><a href="https://www.youtube.com/@RapidRashmi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">Rapid Rashmi - Youtube</a></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Press / Media</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-12 md:flex-row">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} Rapid Rashmi Studio
          </p>
          <div className="flex gap-8 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <Link to="/mobileaccessories" className="hover:text-foreground">Mobile Accessories</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
