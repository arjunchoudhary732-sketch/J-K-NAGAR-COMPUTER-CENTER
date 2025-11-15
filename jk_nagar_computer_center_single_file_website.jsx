import React from 'react';

export default function JKNagarComputerCenter() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <header className="bg-gradient-to-r from-sky-600 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-md flex items-center justify-center font-bold">JK</div>
            <div>
              <h1 className="text-lg font-semibold">J K Nagar Computer Center</h1>
              <p className="text-sm opacity-90">DCA | ADCA | MS Office | Excel | Tally | Web | Python</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 items-center">
            <a href="#courses" className="hover:underline">Courses</a>
            <a href="#templates" className="hover:underline">Templates</a>
            <a href="#pricing" className="hover:underline">Pricing</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <a href="#contact" className="hidden md:inline-block bg-white text-sky-700 px-4 py-2 rounded-md font-medium">Book Free Demo</a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Komputer sikhiye, naukari ya khud ka business shuru kijiye</h2>
            <p className="mt-4 text-lg opacity-90">J K Nagar Computer Center mein practical training — MS Office, Excel (basic to advance), Tally, DCA/ADCA, Web Development, Python aur typing kurs. Short-term aur weekend batches available.</p>

            <div className="mt-6 flex gap-3 flex-wrap">
              <a href="#courses" className="inline-block bg-sky-600 text-white px-4 py-2 rounded-md">Courses dekhain</a>
              <a href="#contact" className="inline-block border border-sky-600 text-sky-600 px-4 py-2 rounded-md">Free demo book karein</a>
            </div>

            <div className="mt-6 text-sm text-slate-700">
              <strong>Location:</strong> J K Nagar, Asansol • <strong>Timing:</strong> Morning/Evening/Weekend
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-semibold text-lg">Quick Enquiry</h3>
            <form className="mt-4 space-y-3" onSubmit={(e)=>e.preventDefault()}>
              <input className="w-full border rounded-md px-3 py-2" placeholder="Naam" />
              <input className="w-full border rounded-md px-3 py-2" placeholder="Phone" />
              <select className="w-full border rounded-md px-3 py-2">
                <option>Course select karein</option>
                <option>MS Office</option>
                <option>Advance Excel</option>
                <option>Tally</option>
                <option>Web Development</option>
                <option>Python</option>
              </select>
              <button className="w-full bg-sky-600 text-white px-3 py-2 rounded-md">Enquire karein</button>
            </form>
            <p className="mt-3 text-xs text-slate-500">(Form demo ke liye hai — backend add karna ho to bataiye)</p>
          </div>
        </section>

        {/* Courses */
        <section id="courses" className="mt-12">
          <h3 className="text-2xl font-bold">Popular Courses</h3>
          <p className="mt-2 text-sm text-slate-600">Practical aur placement-focused syllabus — batches chhote rakhte hain taki sabko personal attention mile.</p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {title: 'BCC (Basic Computer Course)', desc: 'Computer ke basic concepts aur practical skills.'},
              {title: 'MS Office', desc: 'Word, Excel, PowerPoint, Outlook — basic se advance tak.'},
              {title: 'Typing (Hindi/English)', desc: '40-60 WPM tak speed building aur accuracy.'},
              {title: 'Internet & Email Training', desc: 'Internet browsing, email setup, attachments, safety.'},
              {title: 'Advance Excel', desc: 'Complex formulas, PivotTables, data analysis.'},
              {title: 'Professional Excel Dashboard', desc: 'Interactive dashboards, charts, slicers, reporting.'},
              {title: 'TallyPrime + GST', desc: 'Accounting, vouchers, GST returns, reports.'},
              {title: 'DCA (Diploma in Computer Applications)', desc: 'Complete diploma with projects and practicals.'},
              {title: 'ADCA (Advanced DCA)', desc: 'Advanced modules, projects and employable skills.'},
              {title: 'CCC (Course on Computer Concepts)', desc: 'Basic digital literacy and common applications.'},
              {title: 'Canva Designing Course', desc: 'Social media graphics, posters, certificates — hands-on.'},
              {title: 'Resume Designing Course', desc: 'Professional resume templates and customization.'},
              {title: 'HTML Basic / Web Design (HTML)', desc: 'HTML, basic CSS, simple website creation.'},
              {title: 'Python (Basic)', desc: 'Programming fundamentals, small projects.'}
            ].map((c, i) => (
              <article key={i} className="bg-white rounded-xl p-4 shadow-sm">
                <h4 className="font-semibold">{c.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm font-medium">Duration: 1-3 months</span>
                  <a href="#contact" className="text-sky-600 text-sm">Apply</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Templates */}
        <section id="templates" className="mt-12">
          <h3 className="text-2xl font-bold">Free Templates aur Practice Files</h3>
          <p className="mt-2 text-sm text-slate-600">Students ke liye ready-to-use templates: resume, attendance sheet, invoice, ID card, certificate — practice ke liye free download (link add karne par file attach kar denge).</p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Resume', 'Attendance Sheet', 'Invoice', 'ID Card'].map((t,i)=> (
              <div key={i} className="bg-white rounded-md p-3 shadow-sm flex flex-col">
                <div className="h-24 bg-slate-100 rounded-md flex items-center justify-center">Preview</div>
                <h5 className="mt-3 font-medium">{t}</h5>
                <p className="text-xs text-slate-500 mt-1">Editable MS Word / Excel file</p>
                <div className="mt-3 flex gap-2">
                  <button className="text-sm border px-3 py-1 rounded-md">Download</button>
                  <button className="text-sm border px-3 py-1 rounded-md">Preview</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mt-12">
          <h3 className="text-2xl font-bold">Pricing (Example)</h3>
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-semibold">Short Course</h4>
              <p className="mt-2 text-slate-600">4 weeks — 25 hours</p>
              <div className="mt-4 font-bold text-lg">₹1,499</div>
              <div className="mt-4"><a href="#contact" className="text-sky-600">Enroll</a></div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-semibold">Full Course</h4>
              <p className="mt-2 text-slate-600">2 months — 60 hours</p>
              <div className="mt-4 font-bold text-lg">₹4,999</div>
              <div className="mt-4"><a href="#contact" className="text-sky-600">Enroll</a></div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-semibold">Weekend Batch</h4>
              <p className="mt-2 text-slate-600">3 months — weekends only</p>
              <div className="mt-4 font-bold text-lg">₹3,499</div>
              <div className="mt-4"><a href="#contact" className="text-sky-600">Enroll</a></div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-12">
          <h3 className="text-2xl font-bold">Students ke bol</h3>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            <blockquote className="bg-white p-4 rounded-md shadow-sm">"Trainer bahut accha, practical classes mili aur job help mili." — Ramesh</blockquote>
            <blockquote className="bg-white p-4 rounded-md shadow-sm">"Templates aur notes bahut kaam aaye." — Priya</blockquote>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-12 bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold">Contact / Location</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm">Address: J K Nagar, Asansol</p>
              <p className="text-sm mt-2">Phone: +91 9563938402</p>
              <p className="text-sm mt-2">Email: arjunchoudhary732@gmail.com</p>

              <div className="mt-4">
                <h4 className="font-semibold">Opening Hours</h4>
                <p className="text-sm">Mon–Sat: 9:30 AM – 7:30 PM</p>
                <p className="text-sm">Sunday: Closed / By appointment</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold">Message bhejein</h4>
              <form className="mt-3 space-y-3" onSubmit={(e)=>e.preventDefault()}>
                <input className="w-full border rounded-md px-3 py-2" placeholder="Naam" />
                <input className="w-full border rounded-md px-3 py-2" placeholder="Phone" />
                <textarea className="w-full border rounded-md px-3 py-2" rows={4} placeholder="Message"></textarea>
                <button className="bg-sky-600 text-white px-4 py-2 rounded-md">Send</button>
              </form>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-slate-800 text-white mt-12">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
          <div>
            <p className="font-semibold">J K Nagar Computer Center</p>
            <p className="text-sm opacity-80">© {new Date().getFullYear()} All rights reserved</p>
          </div>
          <div className="text-sm opacity-80">Designed by J K Nagar Computer Center • Contact: +91 9563938402</div>
        </div>
      </footer>
    </div>
  );
}
