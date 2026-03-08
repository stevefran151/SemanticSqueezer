import {Fragment,useCallback,useContext,useEffect} from "react"
import {Badge as RadixThemesBadge,Box as RadixThemesBox,Button as RadixThemesButton,Container as RadixThemesContainer,Flex as RadixThemesFlex,Grid as RadixThemesGrid,Heading as RadixThemesHeading,Link as RadixThemesLink,Text as RadixThemesText} from "@radix-ui/themes"
import {EventLoopContext} from "$/utils/context"
import {ReflexEvent} from "$/utils/state"
import {Activity as LucideActivity,Bot as LucideBot,Combine as LucideCombine,ShieldCheck as LucideShieldCheck} from "lucide-react"
import {Link as ReactRouterLink} from "react-router"
import {jsx} from "@emotion/react"




function Flex_5434b9e7fecec936883ab2a9ff3c6693 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_8552f88a33a715f92112f009d36a6cf6 = useCallback(((_e) => (addEvents([(ReflexEvent("_redirect", ({ ["path"] : "/", ["external"] : false, ["popup"] : false, ["replace"] : false }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center", ["cursor"] : "pointer" }),direction:"row",onClick:on_click_8552f88a33a715f92112f009d36a6cf6,gap:"3"},jsx(RadixThemesBox,{css:({ ["background"] : "rgba(0, 255, 255, 0.1)", ["padding"] : "2", ["borderRadius"] : "md" })},jsx(LucideCombine,{css:({ ["color"] : "cyan" }),size:24},)),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "900", ["fontSize"] : "1.2em", ["color"] : "white", ["fontFamily"] : "Outfit, Inter, sans-serif", ["--default-font-family"] : "Outfit, Inter, sans-serif", ["letterSpacing"] : "1px" })},"Semantic Squeezer"))
  )
}


function Button_96827691e72b54481660b37b14af70e2 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_ba268a33c69e4f0009ec93cdaa330d64 = useCallback(((_e) => (addEvents([(ReflexEvent("_redirect", ({ ["path"] : "/playground", ["external"] : false, ["popup"] : false, ["replace"] : false }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"cyan",onClick:on_click_ba268a33c69e4f0009ec93cdaa330d64,size:"2",variant:"solid"},"Get Started")
  )
}


function Button_f158691107a20f23f68d10306441edbf () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_ba268a33c69e4f0009ec93cdaa330d64 = useCallback(((_e) => (addEvents([(ReflexEvent("_redirect", ({ ["path"] : "/playground", ["external"] : false, ["popup"] : false, ["replace"] : false }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"cyan",css:({ ["boxShadow"] : "0 0 15px rgba(0, 255, 255, 0.3)" }),onClick:on_click_ba268a33c69e4f0009ec93cdaa330d64,size:"4"},"Launch Playground")
  )
}


function Button_ada9b3162d79978c707277d0f98e8256 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_b3fa7798d96306a4a224b2592a3d6b7e = useCallback(((_e) => (addEvents([(ReflexEvent("_redirect", ({ ["path"] : "/telemetry", ["external"] : false, ["popup"] : false, ["replace"] : false }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"gray",onClick:on_click_b3fa7798d96306a4a224b2592a3d6b7e,size:"4",variant:"outline"},"View Telemetry")
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["background"] : "radial-gradient(circle at 50% 0%, #0f172a 0%, #000000 100%)", ["minHeight"] : "100vh", ["width"] : "100%", ["fontFamily"] : "Outfit, Inter, sans-serif", ["--default-font-family"] : "Outfit, Inter, sans-serif" })},jsx(RadixThemesFlex,{css:({ ["width"] : "100%", ["paddingTop"] : "4", ["paddingBottom"] : "4", ["paddingInlineStart"] : "8", ["paddingInlineEnd"] : "8", ["borderBottom"] : "1px solid rgba(255, 255, 255, 0.05)", ["backdropFilter"] : "blur(12px)", ["background"] : "rgba(15, 23, 42, 0.8)", ["position"] : "sticky", ["top"] : "0", ["zIndex"] : "50" }),justify:"between"},jsx(Flex_5434b9e7fecec936883ab2a9ff3c6693,{},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center", ["display"] : "flex" }),direction:"row",gap:"6"},jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "rgba(255,255,255,0.7)", ["fontWeight"] : "500", ["transition"] : "all 0.2s ease", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/"},"Home")),jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "rgba(255,255,255,0.7)", ["fontWeight"] : "500", ["transition"] : "all 0.2s ease", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/playground"},"Playground")),jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "rgba(255,255,255,0.7)", ["fontWeight"] : "500", ["transition"] : "all 0.2s ease", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/telemetry"},"Telemetry"))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(Button_96827691e72b54481660b37b14af70e2,{},))),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%" })},jsx(RadixThemesContainer,{css:({ ["padding"] : "16px", ["maxWidth"] : "1400px", ["paddingTop"] : "8", ["paddingBottom"] : "12" }),size:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"8"},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center", ["marginTop"] : "10vh", ["marginBottom"] : "10vh" }),direction:"column",gap:"3"},jsx(RadixThemesBadge,{color:"cyan",css:({ ["borderRadius"] : "full", ["marginBottom"] : "4" }),size:"3",variant:"surface"},"v2.0 EDGE"),jsx(RadixThemesHeading,{css:({ ["fontWeight"] : "900", ["fontFamily"] : "Outfit, Inter, sans-serif", ["--default-font-family"] : "Outfit, Inter, sans-serif", ["color"] : "white", ["textAlign"] : "center", ["lineHeight"] : "1.1" }),size:"9"},"Optimize Your Prompts at the Edge"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray", ["marginTop"] : "4", ["marginBottom"] : "8", ["fontWeight"] : "500", ["letterSpacing"] : "1px", ["textAlign"] : "center", ["maxWidth"] : "800px" }),size:"5"},"Hybrid-Edge AI Inference & Asynchronous Ethical Auditing for Maximum Efficiency and Security."),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"4"},jsx(Button_f158691107a20f23f68d10306441edbf,{},),jsx(Button_ada9b3162d79978c707277d0f98e8256,{},)))),jsx(RadixThemesGrid,{columns:"3",css:({ ["width"] : "100%" }),gap:"6"},jsx(RadixThemesBox,{css:({ ["background"] : "rgba(255,255,255,0.02)", ["p"] : "6", ["borderRadius"] : "xl", ["border"] : "1px solid rgba(255,255,255,0.05)" })},jsx(LucideBot,{css:({ ["color"] : "cyan", ["marginBottom"] : "4" }),size:32},),jsx(RadixThemesHeading,{css:({ ["marginBottom"] : "2" }),size:"5"},"Local Inference"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray" })},"Run models directly on your hardware to reduce latency and cloud costs.")),jsx(RadixThemesBox,{css:({ ["background"] : "rgba(255,255,255,0.02)", ["p"] : "6", ["borderRadius"] : "xl", ["border"] : "1px solid rgba(255,255,255,0.05)" })},jsx(LucideShieldCheck,{css:({ ["color"] : "green", ["marginBottom"] : "4" }),size:32},),jsx(RadixThemesHeading,{css:({ ["marginBottom"] : "2" }),size:"5"},"Ethical Auditing"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray" })},"Asynchronous safety checks ensure that your prompts don't leak or bypass security.")),jsx(RadixThemesBox,{css:({ ["background"] : "rgba(255,255,255,0.02)", ["p"] : "6", ["borderRadius"] : "xl", ["border"] : "1px solid rgba(255,255,255,0.05)" })},jsx(LucideActivity,{css:({ ["color"] : "purple", ["marginBottom"] : "4" }),size:32},),jsx(RadixThemesHeading,{css:({ ["marginBottom"] : "2" }),size:"5"},"Live Telemetry"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray" })},"Monitor your token budget, latency, CPU and memory utilization in real-time."))))))),jsx("title",{},"Ui | Index"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}