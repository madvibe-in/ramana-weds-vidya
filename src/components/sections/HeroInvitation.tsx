import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import { FloralDivider, FloatingPetal } from "../common/Decor";
import { wedding } from "../../data/weddingData";
import { useReducedMotionPreference } from "../../hooks/useReducedMotionPreference";
import { gsap } from "../../lib/gsap";

function GoldCorner({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="64"
      height="64"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M8 60 C14 40, 26 22, 52 8" stroke="rgba(201,168,124,0.45)" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M22 38 C14 34, 12 26, 18 20 C26 25, 28 32, 22 38Z" fill="rgba(201,168,124,0.08)" stroke="rgba(201,168,124,0.35)" strokeWidth="0.75" />
      <path d="M34 22 C27 15, 30 8, 38 5 C44 13, 42 20, 34 22Z" fill="rgba(240,217,191,0.08)" stroke="rgba(240,217,191,0.35)" strokeWidth="0.75" />
      <path d="M43 16 C51 11, 58 13, 62 21 C53 25, 47 22, 43 16Z" fill="rgba(201,168,124,0.08)" stroke="rgba(201,168,124,0.3)" strokeWidth="0.75" />
      <circle cx="10" cy="58" r="1.2" fill="rgba(201,168,124,0.42)" />
      <circle cx="54" cy="10" r="1.2" fill="rgba(201,168,124,0.42)" />
    </svg>
  );
}

function MandapamArch({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="280"
      height="132"
      viewBox="0 0 280 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M26 118 V62 C26 42 42 26 62 26 H218 C238 26 254 42 254 62 V118" stroke="rgba(201,168,124,0.55)" strokeWidth="1.2" />
      <path d="M40 118 V64 C40 51 51 40 64 40 H216 C229 40 240 51 240 64 V118" stroke="rgba(217,182,176,0.48)" strokeWidth="0.9" />
      <path d="M62 26 C79 8 113 6 140 24 C167 6 201 8 218 26" stroke="rgba(201,168,124,0.42)" strokeWidth="0.9" />
      <path d="M70 26 C87 15 111 15 140 32 C169 15 193 15 210 26" stroke="rgba(201,168,124,0.34)" strokeWidth="0.75" />
      <path d="M18 118 H76 M204 118 H262" stroke="rgba(201,168,124,0.5)" strokeWidth="1" strokeLinecap="round" />
      <path d="M50 118 V78 M230 118 V78" stroke="rgba(201,168,124,0.42)" strokeWidth="1" strokeLinecap="round" />
      <path d="M48 74 H72 M208 74 H232" stroke="rgba(201,168,124,0.42)" strokeWidth="1" strokeLinecap="round" />
      {Array.from({ length: 9 }, (_, index) => {
        const cx = 76 + index * 16;
        return <circle key={cx} cx={cx} cy="37" r="2.2" fill="rgba(217,182,176,0.45)" />;
      })}
      <path d="M96 58 C116 48 164 48 184 58" stroke="rgba(217,182,176,0.45)" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M112 64 C127 58 153 58 168 64" stroke="rgba(201,168,124,0.4)" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  );
}

export default function HeroInvitation() {
  const rootRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotionPreference();
  const hasOpenedRef = useRef(false);
  const musicRef = useRef<HTMLAudioElement | null>(null);
  const musicFadeRef = useRef<ReturnType<typeof gsap.to> | null>(null);

  const unlockScroll = () => {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  };

  const playWeddingMusic = () => {
    let music = musicRef.current;

    if (!music) {
      music = new Audio("/bg-song.mp3");
      music.preload = "auto";
      music.loop = true;
      music.volume = 0;
      musicRef.current = music;
    }

    music.volume = 0;

    void music.play().then(() => {
      musicFadeRef.current?.kill();
      musicFadeRef.current = gsap.to(music, {
        volume: 0.1,
        duration: 10,
        ease: "power1.inOut"
      });
    }).catch(() => {
      // Browsers can block audio; the invitation still opens normally.
    });
  };

  const openEnvelope = () => {
    if (hasOpenedRef.current) return;
    hasOpenedRef.current = true;
    playWeddingMusic();

    if (prefersReducedMotion) {
      gsap.set(".envelope-shell", { opacity: 0, pointerEvents: "none" });
      gsap.set(".hero-reveal-shell", { opacity: 1, pointerEvents: "auto" });
      gsap.set(".card-reveal", { y: 0, opacity: 1 });
      gsap.set(".hero-scroll-hint", { opacity: 1 });
      unlockScroll();
      return;
    }

    const tl = gsap.timeline({ onComplete: unlockScroll });

    tl
      .to(".envelope-copy", { y: -26, opacity: 0, duration: 0.32, ease: "power2.inOut" })
      .to(".envelope-seal", { scale: 0.58, opacity: 0, y: -18, duration: 0.32, ease: "power2.inOut" }, 0.1)
      .to(".envelope-top-flap", { rotateX: -170, duration: 0.78, ease: "power3.inOut" }, 0.2)
      .to(".envelope-left-fold", { xPercent: -100, duration: 0.68, ease: "power3.inOut" }, 0.3)
      .to(".envelope-right-fold", { xPercent: 100, duration: 0.68, ease: "power3.inOut" }, 0.3)
      .to(".envelope-bottom-pocket", { yPercent: 80, duration: 0.68, ease: "power3.inOut" }, 0.4)
      .to(".envelope-shell", { opacity: 0, duration: 0.68, ease: "power2.inOut", pointerEvents: "none" }, 0.82)
      .to(".hero-reveal-shell", { opacity: 1, duration: 0.72, ease: "power2.inOut", pointerEvents: "auto" }, 0.82)
      .to(".card-reveal", { y: 0, opacity: 1, stagger: 0.07, duration: 0.38, ease: "power2.out" }, 1)
      .to(".hero-scroll-hint", { opacity: 1, duration: 0.4, ease: "power2.out" }, 1.72);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      unlockScroll();
      musicFadeRef.current?.kill();
      musicRef.current?.pause();
    };
  }, []);

  useEffect(() => {
    if (!rootRef.current) return undefined;

    const ctx = gsap.context(() => {
      gsap.set(".hero-reveal-shell", { opacity: prefersReducedMotion ? 1 : 0 });
      gsap.set(".card-reveal", { y: prefersReducedMotion ? 0 : 16, opacity: prefersReducedMotion ? 1 : 0 });
      gsap.set(".hero-scroll-hint", { opacity: 0 });
      gsap.set(".envelope-top-flap", {
        rotateX: 0,
        transformPerspective: 1200,
        transformOrigin: "50% 0%"
      });

      if (!prefersReducedMotion) {
        gsap.utils.toArray<HTMLElement>(".hero-petal").forEach((petal, index) => {
          gsap.to(petal, {
            x: index % 2 === 0 ? 9 : -9,
            y: index % 2 === 0 ? -12 : 12,
            rotate: index % 2 === 0 ? 7 : -7,
            duration: 5 + index,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
        });
      }
    }, rootRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      id="hero"
      ref={rootRef}
      className="relative min-h-[100svh] overflow-hidden bg-[var(--ivory)]"
    >
      <div
        className="absolute inset-0 bg-[linear-gradient(145deg,#fffaf7_0%,#f8f2ef_42%,#f0d9bf_100%)]"
        aria-hidden="true"
      />
      <div className="hero-linen-pattern absolute inset-0 opacity-80" aria-hidden="true" />
      <div
        className="absolute inset-x-0 top-0 h-36 bg-[linear-gradient(180deg,rgba(255,250,247,0.96),rgba(255,250,247,0))]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-6 top-6 bottom-6 hidden border border-[rgba(201,168,124,0.26)] md:block"
        aria-hidden="true"
      />
      <GoldCorner className="absolute left-7 top-7 hidden opacity-55 md:block" />
      <GoldCorner className="absolute right-7 top-7 hidden rotate-90 opacity-55 md:block" />
      <GoldCorner className="absolute bottom-7 left-7 hidden -rotate-90 opacity-55 md:block" />
      <GoldCorner className="absolute bottom-7 right-7 hidden rotate-180 opacity-55 md:block" />

      <FloatingPetal className="hero-petal absolute left-[8%] top-[17%] h-5 w-4 -rotate-12 opacity-50" />
      <FloatingPetal className="hero-petal absolute right-[10%] top-[19%] h-5 w-4 rotate-12 opacity-50" />
      <FloatingPetal className="hero-petal absolute bottom-[21%] left-[12%] h-5 w-4 rotate-6 opacity-45" />
      <FloatingPetal className="hero-petal absolute bottom-[18%] right-[14%] h-5 w-4 -rotate-6 opacity-45" />

      <div className="hero-reveal-shell pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-4 py-7 sm:px-6">
        <article className="relative flex max-h-[calc(100svh-56px)] w-full max-w-[620px] flex-col items-center justify-center overflow-hidden rounded-lg border border-[rgba(201,168,124,0.38)] bg-[rgba(255,250,247,0.9)] px-6 py-7 text-center shadow-[0_28px_90px_rgba(78,61,66,0.16)] backdrop-blur-sm sm:px-10 sm:py-9 md:px-14">
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.72),rgba(255,250,247,0.18)_42%,rgba(240,217,191,0.24))]" aria-hidden="true" />
          <div className="absolute inset-x-4 top-4 bottom-4 border border-[rgba(217,182,176,0.28)]" aria-hidden="true" />
          <MandapamArch className="card-reveal relative mb-1 w-[190px] opacity-85 sm:w-[230px]" />
          <p className="card-reveal relative font-body text-[9px] font-semibold uppercase tracking-[0.28em] text-[rgba(78,61,66,0.5)] sm:text-[10px]">
            Wedding Invitation
          </p>
          <FloralDivider className="card-reveal relative mx-auto mt-4 opacity-70 sm:mt-5" />

          <h1 className="card-reveal relative mt-5 flex flex-col items-center sm:mt-7">
            <span className="font-script text-[56px] leading-none text-[var(--plum)] sm:text-[78px] md:text-[92px]">
              {wedding.groomFirst}
            </span>
            <span className="my-1 font-display text-[22px] italic leading-none text-[rgba(133,92,58,0.68)] sm:text-[28px]">
              weds
            </span>
            <span className="font-script text-[56px] leading-none text-[var(--plum)] sm:text-[78px] md:text-[92px]">
              {wedding.brideFirst}
            </span>
          </h1>

          <p className="card-reveal relative mx-auto mt-5 max-w-sm font-display text-[21px] italic leading-tight text-[rgba(78,61,66,0.72)] sm:text-[24px]">
            {wedding.groomFull} with {wedding.brideFull}
          </p>
          <p className="card-reveal relative mx-auto mt-4 max-w-md font-body text-[12px] leading-[1.75] text-[rgba(78,61,66,0.62)] sm:text-[13px]">
            Together with their families, they request your presence and blessings as they begin their married life.
          </p>

          <div className="card-reveal relative mt-5 flex flex-col items-center text-center sm:mt-6">
            <div className="mb-4 h-px w-20 bg-[linear-gradient(90deg,transparent,rgba(201,168,124,0.52),transparent)]" aria-hidden="true" />
            <p className="font-body text-[10px] font-semibold uppercase tracking-[0.36em] text-[rgba(78,61,66,0.7)] sm:text-[11px]">
              {wedding.date}
            </p>
            <p className="mt-2 font-body text-[9px] font-semibold uppercase tracking-[0.28em] text-[rgba(78,61,66,0.52)] sm:text-[10px]">
              Sumuhurtham at {wedding.muhurthamTime}
            </p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <MapPin size={12} className="shrink-0 translate-y-[-0.5px] text-[rgba(133,92,58,0.62)]" aria-hidden="true" />
              <p className="whitespace-nowrap font-body text-[8px] font-semibold uppercase leading-[1.75] tracking-[0.1em] text-[rgba(78,61,66,0.56)] sm:text-[10px] sm:tracking-[0.18em]">
                {wedding.venueLine}
              </p>
            </div>
          </div>
        </article>
      </div>

      <div className="envelope-shell absolute inset-x-0 top-0 bottom-[-120px] z-30 overflow-hidden bg-[linear-gradient(145deg,#fff8ee_0%,#f2dfc8_46%,#dec09a_100%)] shadow-[inset_0_0_90px_rgba(78,61,66,0.08)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(255,253,249,0.82),transparent_36%),radial-gradient(ellipse_at_50%_72%,rgba(185,136,63,0.16),transparent_46%),linear-gradient(180deg,rgba(255,250,247,0.52),rgba(240,217,191,0.12))]" />
        <div className="envelope-paper-grain absolute inset-0 opacity-45" />
        <div className="absolute inset-x-4 top-4 bottom-[140px] border border-[rgba(201,168,124,0.28)] sm:inset-x-8 sm:top-8" />
        <GoldCorner className="absolute left-5 top-5 opacity-40 sm:left-9 sm:top-9" />
        <GoldCorner className="absolute right-5 top-5 rotate-90 opacity-40 sm:right-9 sm:top-9" />

        <div className="envelope-top-flap absolute inset-x-0 top-0 z-40 h-[62dvh] [backface-visibility:hidden] [clip-path:polygon(0_0,100%_0,100%_65%,50%_100%,0_65%)] [transform-style:preserve-3d] bg-[linear-gradient(180deg,#fffaf4_0%,#f3e4d2_48%,#ddc29f_100%)] shadow-[0_26px_58px_rgba(78,61,66,0.16),inset_0_-1px_0_rgba(133,92,58,0.13)]">
          <div className="absolute left-1/2 top-8 -translate-x-1/2 scale-90 opacity-35">
            <MandapamArch className="w-[230px]" />
          </div>
        </div>
        <div className="envelope-left-fold absolute bottom-[-120px] left-0 top-0 z-30 w-[12vw] bg-[linear-gradient(90deg,rgba(209,176,169,0.58)_0%,rgba(250,239,226,0.1)_100%)] shadow-[1px_0_10px_rgba(0,0,0,0.05)] sm:w-[8vw]" />
        <div className="envelope-right-fold absolute bottom-[-120px] right-0 top-0 z-30 w-[12vw] bg-[linear-gradient(-90deg,rgba(203,191,215,0.4)_0%,rgba(250,239,226,0.1)_100%)] shadow-[-1px_0_10px_rgba(0,0,0,0.05)] sm:w-[8vw]" />
        <div className="envelope-bottom-pocket absolute inset-x-0 bottom-[-120px] z-[35] h-[calc(70dvh+120px)] bg-[linear-gradient(180deg,#f0d8b8_0%,#fff8ef_42%,#e5c99f_100%)] shadow-[0_-12px_36px_rgba(78,61,66,0.15),inset_0_1px_0_rgba(255,255,255,0.74)]">
          <div className="absolute inset-x-4 top-4 bottom-[136px] border border-[rgba(201,168,124,0.36)] sm:inset-x-8 sm:top-6 sm:bottom-[140px]" />
          <GoldCorner className="absolute left-5 top-5 opacity-50 sm:left-9 sm:top-7" />
          <GoldCorner className="absolute right-5 top-5 rotate-90 opacity-50 sm:right-9 sm:top-7" />
        </div>

        <div className="absolute inset-x-0 top-[14%] z-[60] flex justify-center px-6 sm:top-[16%]">
          <div className="envelope-copy flex w-full max-w-[350px] flex-col items-center text-center">
            <div className="mb-5 h-px w-24 bg-[linear-gradient(90deg,transparent,rgba(133,92,58,0.22),transparent)]" aria-hidden="true" />
            <p className="font-body text-[8px] font-semibold uppercase tracking-[0.28em] text-[rgba(78,61,66,0.48)] [text-shadow:0_1px_0_rgba(255,255,255,0.58)]">
              Wedding Invitation
            </p>
            <p className="mt-8 font-script text-[54px] leading-[0.88] text-[rgba(78,61,66,0.88)] drop-shadow-[0_1px_0_rgba(255,255,255,0.78)] sm:text-[78px]">
              {wedding.groomFirst}
            </p>
            <span className="my-4 font-display text-[22px] italic leading-none text-[rgba(133,92,58,0.58)]">
              weds
            </span>
            <p className="font-script text-[54px] leading-[0.88] text-[rgba(78,61,66,0.88)] drop-shadow-[0_1px_0_rgba(255,255,255,0.78)] sm:text-[78px]">
              {wedding.brideFirst}
            </p>
            <div className="mt-6 h-px w-20 bg-[linear-gradient(90deg,transparent,rgba(133,92,58,0.18),transparent)]" aria-hidden="true" />
          </div>
        </div>

        <div className="absolute inset-x-0 top-[62dvh] z-[65] flex -translate-y-1/2 justify-center">
          <button
            type="button"
            onClick={openEnvelope}
            className="envelope-seal wax-seal light-focus relative isolate flex h-16 w-16 items-center justify-center rounded-full border border-[rgba(255,250,247,0.62)] bg-[radial-gradient(circle_at_34%_28%,#f5d99e_0%,#d1a45d_34%,#a97831_78%,#81551f_100%)] shadow-[0_12px_24px_rgba(78,61,66,0.4),inset_0_2px_4px_rgba(255,255,255,0.38),inset_0_-8px_16px_rgba(86,48,18,0.22)] transition-transform duration-300 hover:scale-[1.04] active:scale-95 sm:h-[78px] sm:w-[78px]"
            aria-label="Open wedding invitation"
          >
            <span className="absolute inset-[9px] rounded-full border border-[rgba(88,51,20,0.28)] shadow-[inset_0_1px_3px_rgba(255,250,247,0.28)]" aria-hidden="true" />
            <span className="relative z-10 font-display text-[8px] font-bold uppercase tracking-[0.2em] text-[rgba(70,42,20,0.82)] [text-shadow:0_1px_0_rgba(255,250,247,0.28)] sm:text-[9px]">
              Open
            </span>
          </button>
        </div>

        <div className="absolute inset-x-0 top-[76dvh] z-[60] flex justify-center px-6">
          <div className="envelope-copy flex w-full flex-col items-center text-center">
            <p className="font-body text-[9.5px] font-semibold uppercase tracking-[0.28em] text-[rgba(78,61,66,0.65)] [text-shadow:0_1px_0_rgba(255,255,255,0.65)]">
              {wedding.day}, {wedding.date}
            </p>
            <p className="mt-2 font-body text-[9px] font-semibold uppercase tracking-[0.18em] text-[rgba(78,61,66,0.52)]">
              Muhurtham at {wedding.muhurthamTime}
            </p>
            <div className="mt-4 h-px w-16 bg-[linear-gradient(90deg,transparent,rgba(133,92,58,0.2),transparent)]" aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-3 z-40 flex justify-center sm:bottom-6">
        <div className="hero-scroll-hint flex flex-col items-center text-[rgba(201,168,124,0.7)]">
          <span className="h-6 w-px bg-[rgba(201,168,124,0.3)] sm:h-7" />
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          >
            <ChevronDown size={16} />
          </motion.span>
          <span className="sr-only">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
