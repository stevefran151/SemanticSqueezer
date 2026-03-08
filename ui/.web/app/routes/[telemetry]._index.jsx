import {Fragment,useCallback,useContext,useEffect} from "react"
import {Box as RadixThemesBox,Button as RadixThemesButton,Container as RadixThemesContainer,Flex as RadixThemesFlex,Grid as RadixThemesGrid,Heading as RadixThemesHeading,Link as RadixThemesLink,Text as RadixThemesText} from "@radix-ui/themes"
import {ClientSide,EventLoopContext,StateContexts} from "$/utils/context"
import {ReflexEvent} from "$/utils/state"
import {Activity as LucideActivity,Banknote as LucideBanknote,Cloud as LucideCloud,Combine as LucideCombine,Cpu as LucideCpu,DollarSign as LucideDollarSign,GitMerge as LucideGitMerge,Percent as LucidePercent,RefreshCw as LucideRefreshCw,Server as LucideServer,ShieldCheck as LucideShieldCheck} from "lucide-react"
import {Link as ReactRouterLink} from "react-router"
import {Area as RechartsArea,Line as RechartsLine,ResponsiveContainer as RechartsResponsiveContainer,Tooltip as RechartsTooltip,XAxis as RechartsXAxis,YAxis as RechartsYAxis} from "recharts"
import {jsx} from "@emotion/react"

const RechartsAreaChart = ClientSide(() => import('recharts').then((mod) => mod.AreaChart))
const RechartsLineChart = ClientSide(() => import('recharts').then((mod) => mod.LineChart))


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


function Text_3f5ec90a2f0198939231fe6861845be4 () {
  const reflex___state____state__ui___ui____state = useContext(StateContexts.reflex___state____state__ui___ui____state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "1.8em", ["fontWeight"] : "800", ["fontFamily"] : "Outfit, Inter, sans-serif", ["--default-font-family"] : "Outfit, Inter, sans-serif" })},(JSON.stringify(reflex___state____state__ui___ui____state.edge_requests_rx_state_)))
  )
}


function Text_0b977ca3ca62fd1251379a034ba60987 () {
  const reflex___state____state__ui___ui____state = useContext(StateContexts.reflex___state____state__ui___ui____state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "1.8em", ["fontWeight"] : "800", ["fontFamily"] : "Outfit, Inter, sans-serif", ["--default-font-family"] : "Outfit, Inter, sans-serif" })},(JSON.stringify(reflex___state____state__ui___ui____state.cloud_requests_rx_state_)))
  )
}


function Text_732a5e2bdf54f36fec44b08a92c46b4b () {
  const reflex___state____state__ui___ui____state = useContext(StateContexts.reflex___state____state__ui___ui____state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "1.8em", ["fontWeight"] : "800", ["fontFamily"] : "Outfit, Inter, sans-serif", ["--default-font-family"] : "Outfit, Inter, sans-serif" })},(JSON.stringify(reflex___state____state__ui___ui____state.cloud_calls_avoided_rx_state_)))
  )
}


function Text_0da7c60252cfcb538cd6505e5d9461a3 () {
  const reflex___state____state__ui___ui____state = useContext(StateContexts.reflex___state____state__ui___ui____state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "1.8em", ["fontWeight"] : "800", ["fontFamily"] : "Outfit, Inter, sans-serif", ["--default-font-family"] : "Outfit, Inter, sans-serif" })},reflex___state____state__ui___ui____state.squeeze_ratio_rx_state_)
  )
}


function Text_25b04ae28441abb556a6c4fab8377d79 () {
  const reflex___state____state__ui___ui____state = useContext(StateContexts.reflex___state____state__ui___ui____state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "1.8em", ["fontWeight"] : "800", ["fontFamily"] : "Outfit, Inter, sans-serif", ["--default-font-family"] : "Outfit, Inter, sans-serif" })},reflex___state____state__ui___ui____state.estimated_savings_usd_rx_state_)
  )
}


function Button_86754b06d0c24daa01cc47a28d8e2c32 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_3892c1dabee0ef9ce5b1c640be8c55e1 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.ui___ui____state.poll_metrics", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"cyan",css:({ ["cursor"] : "pointer" }),onClick:on_click_3892c1dabee0ef9ce5b1c640be8c55e1,variant:"outline"},jsx(LucideRefreshCw,{size:16},),"Refresh Telemetry")
  )
}


function Responsivecontainer_4d2a157b49b4e4ea9f5d2b830a32498a () {
  const reflex___state____state__ui___ui____state = useContext(StateContexts.reflex___state____state__ui___ui____state)



  return (
    jsx(RechartsResponsiveContainer,{height:200,minHeight:10,minWidth:10,width:"100%"},jsx(RechartsLineChart,{data:reflex___state____state__ui___ui____state.latency_data_rx_state_,height:"100%",width:"100%"},jsx(RechartsLine,{activeDot:({ ["stroke"] : "var(--accent-2)", ["fill"] : "var(--accent-10)" }),dataKey:"latency",dot:false,stroke:"#06b6d4",strokeWidth:3,type:"monotone"},),jsx(RechartsXAxis,{dataKey:"time",stroke:"rgba(255,255,255,0.2)"},),jsx(RechartsYAxis,{stroke:"rgba(255,255,255,0.2)"},),jsx(RechartsTooltip,{contentStyle:({ ["backgroundColor"] : "#0f172a", ["borderRadius"] : "8px", ["border"] : "1px solid rgba(255,255,255,0.1)" }),cursor:({ ["strokeWidth"] : 1, ["fill"] : "var(--gray-3)" }),itemStyle:({ ["color"] : "var(--gray-12)" }),labelStyle:({ ["color"] : "var(--gray-11)" })},)))
  )
}


function Responsivecontainer_60f65274a7f67b4c910e74622c032ee0 () {
  const reflex___state____state__ui___ui____state = useContext(StateContexts.reflex___state____state__ui___ui____state)



  return (
    jsx(RechartsResponsiveContainer,{height:200,minHeight:10,minWidth:10,width:"100%"},jsx(RechartsLineChart,{data:reflex___state____state__ui___ui____state.cpu_data_rx_state_,height:"100%",width:"100%"},jsx(RechartsLine,{activeDot:({ ["stroke"] : "var(--accent-2)", ["fill"] : "var(--accent-10)" }),dataKey:"load",dot:false,stroke:"#10b981",strokeWidth:3,type:"monotone"},),jsx(RechartsXAxis,{dataKey:"time",stroke:"rgba(255,255,255,0.2)"},),jsx(RechartsYAxis,{stroke:"rgba(255,255,255,0.2)"},),jsx(RechartsTooltip,{contentStyle:({ ["backgroundColor"] : "#0f172a", ["borderRadius"] : "8px", ["border"] : "1px solid rgba(255,255,255,0.1)" }),cursor:({ ["strokeWidth"] : 1, ["fill"] : "var(--gray-3)" }),itemStyle:({ ["color"] : "var(--gray-12)" }),labelStyle:({ ["color"] : "var(--gray-11)" })},)))
  )
}


function Responsivecontainer_f172955aa2de39225ea4e28d344c46e2 () {
  const reflex___state____state__ui___ui____state = useContext(StateContexts.reflex___state____state__ui___ui____state)



  return (
    jsx(RechartsResponsiveContainer,{height:200,minHeight:10,minWidth:10,width:"100%"},jsx(RechartsLineChart,{data:reflex___state____state__ui___ui____state.ram_data_rx_state_,height:"100%",width:"100%"},jsx(RechartsLine,{activeDot:({ ["stroke"] : "var(--accent-2)", ["fill"] : "var(--accent-10)" }),dataKey:"load",dot:false,stroke:"#8b5cf6",strokeWidth:3,type:"monotone"},),jsx(RechartsXAxis,{dataKey:"time",stroke:"rgba(255,255,255,0.2)"},),jsx(RechartsYAxis,{stroke:"rgba(255,255,255,0.2)"},),jsx(RechartsTooltip,{contentStyle:({ ["backgroundColor"] : "#0f172a", ["borderRadius"] : "8px", ["border"] : "1px solid rgba(255,255,255,0.1)" }),cursor:({ ["strokeWidth"] : 1, ["fill"] : "var(--gray-3)" }),itemStyle:({ ["color"] : "var(--gray-12)" }),labelStyle:({ ["color"] : "var(--gray-11)" })},)))
  )
}


function Responsivecontainer_fce5dfc4ca81764a69a82ea36003d70a () {
  const reflex___state____state__ui___ui____state = useContext(StateContexts.reflex___state____state__ui___ui____state)



  return (
    jsx(RechartsResponsiveContainer,{height:200,minHeight:10,minWidth:10,width:"100%"},jsx(RechartsLineChart,{data:reflex___state____state__ui___ui____state.token_data_rx_state_,height:"100%",width:"100%"},jsx(RechartsLine,{activeDot:({ ["stroke"] : "var(--accent-2)", ["fill"] : "var(--accent-10)" }),dataKey:"budget",dot:false,stroke:"#f59e0b",strokeWidth:3,type:"monotone"},),jsx(RechartsXAxis,{dataKey:"time",stroke:"rgba(255,255,255,0.2)"},),jsx(RechartsYAxis,{stroke:"rgba(255,255,255,0.2)"},),jsx(RechartsTooltip,{contentStyle:({ ["backgroundColor"] : "#0f172a", ["borderRadius"] : "8px", ["border"] : "1px solid rgba(255,255,255,0.1)" }),cursor:({ ["strokeWidth"] : 1, ["fill"] : "var(--gray-3)" }),itemStyle:({ ["color"] : "var(--gray-12)" }),labelStyle:({ ["color"] : "var(--gray-11)" })},)))
  )
}


function Responsivecontainer_801fb3ea708fbf69f91d55a85ae6df48 () {
  const reflex___state____state__ui___ui____state = useContext(StateContexts.reflex___state____state__ui___ui____state)



  return (
    jsx(RechartsResponsiveContainer,{height:200,minHeight:10,minWidth:10,width:"100%"},jsx(RechartsAreaChart,{data:reflex___state____state__ui___ui____state.pulse_data_rx_state_,height:"100%",width:"100%"},jsx(RechartsArea,{activeDot:({ ["stroke"] : "var(--accent-2)", ["fill"] : "var(--accent-10)" }),dataKey:"flow",fill:"#ec4899",stroke:"#ec4899",type:"monotone",wrapperStyle:({ ["fillOpacity"] : 0.3 })},),jsx(RechartsXAxis,{dataKey:"time",hide:true,stroke:"var(--gray-9)"},),jsx(RechartsTooltip,{contentStyle:({ ["backgroundColor"] : "#0f172a", ["borderRadius"] : "8px" }),cursor:({ ["strokeWidth"] : 1, ["fill"] : "var(--gray-3)" }),itemStyle:({ ["color"] : "var(--gray-12)" }),labelStyle:({ ["color"] : "var(--gray-11)" })},)))
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["background"] : "radial-gradient(circle at 50% 0%, #0f172a 0%, #000000 100%)", ["minHeight"] : "100vh", ["width"] : "100%", ["fontFamily"] : "Outfit, Inter, sans-serif", ["--default-font-family"] : "Outfit, Inter, sans-serif" })},jsx(RadixThemesFlex,{css:({ ["width"] : "100%", ["paddingTop"] : "4", ["paddingBottom"] : "4", ["paddingInlineStart"] : "8", ["paddingInlineEnd"] : "8", ["borderBottom"] : "1px solid rgba(255, 255, 255, 0.05)", ["backdropFilter"] : "blur(12px)", ["background"] : "rgba(15, 23, 42, 0.8)", ["position"] : "sticky", ["top"] : "0", ["zIndex"] : "50" }),justify:"between"},jsx(Flex_5434b9e7fecec936883ab2a9ff3c6693,{},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center", ["display"] : "flex" }),direction:"row",gap:"6"},jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "rgba(255,255,255,0.7)", ["fontWeight"] : "500", ["transition"] : "all 0.2s ease", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/"},"Home")),jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "rgba(255,255,255,0.7)", ["fontWeight"] : "500", ["transition"] : "all 0.2s ease", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/playground"},"Playground")),jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "rgba(255,255,255,0.7)", ["fontWeight"] : "500", ["transition"] : "all 0.2s ease", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/telemetry"},"Telemetry"))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(Button_96827691e72b54481660b37b14af70e2,{},))),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%" })},jsx(RadixThemesContainer,{css:({ ["padding"] : "16px", ["maxWidth"] : "1400px", ["paddingTop"] : "8", ["paddingBottom"] : "12" }),size:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{css:({ ["alignItems"] : "start", ["width"] : "100%", ["marginBottom"] : "6" })},jsx(RadixThemesBox,{css:({ ["direction"] : "column" })},jsx(RadixThemesHeading,{css:({ ["fontWeight"] : "900", ["fontFamily"] : "Outfit, Inter, sans-serif", ["--default-font-family"] : "Outfit, Inter, sans-serif", ["color"] : "white", ["lineHeight"] : "1" }),size:"8"},"SYSTEM"),jsx(RadixThemesHeading,{css:({ ["WebkitTextStroke"] : "2px #10b981", ["fontWeight"] : "900", ["fontFamily"] : "Outfit, Inter, sans-serif", ["--default-font-family"] : "Outfit, Inter, sans-serif", ["color"] : "transparent" }),size:"8"},"TELEMETRY"))),jsx(RadixThemesBox,{css:({ ["background"] : "linear-gradient(145deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.9) 100%)", ["p"] : "6", ["marginBottom"] : "6", ["borderRadius"] : "2xl", ["border"] : "1px solid rgba(255, 255, 255, 0.05)", ["boxShadow"] : "0 15px 30px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)" })},jsx(RadixThemesFlex,{css:({ ["alignItems"] : "center", ["marginBottom"] : "6" }),gap:"2"},jsx(LucideDollarSign,{css:({ ["color"] : "green" }),size:28},),jsx(RadixThemesHeading,{css:({ ["fontWeight"] : "800", ["fontFamily"] : "Outfit, Inter, sans-serif", ["--default-font-family"] : "Outfit, Inter, sans-serif" }),size:"6"},"Real-Time ROI Ticker")),jsx(RadixThemesGrid,{columns:"5",css:({ ["width"] : "100%" }),gap:"4"},jsx(RadixThemesBox,{css:({ ["background"] : "rgba(255, 255, 255, 0.03)", ["border"] : "1px solid rgba(255, 255, 255, 0.05)", ["backdropFilter"] : "blur(10px)", ["p"] : "5", ["borderRadius"] : "xl", ["width"] : "100%", ["transition"] : "all 0.3s ease", ["&:hover"] : ({ ["transform"] : "translateY(-2px)", ["boxShadow"] : "0 8px 24px rgba(0, 255, 255, 0.1)" }) })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "start" }),direction:"column",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray", ["fontSize"] : "0.8em", ["fontWeight"] : "600", ["textTransform"] : "uppercase", ["letterSpacing"] : "1px" })},"Edge P99 Handler"),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"row",gap:"3"},jsx(LucideCpu,{css:({ ["color"] : "cyan" }),size:24},),jsx(Text_3f5ec90a2f0198939231fe6861845be4,{},)))),jsx(RadixThemesBox,{css:({ ["background"] : "rgba(255, 255, 255, 0.03)", ["border"] : "1px solid rgba(255, 255, 255, 0.05)", ["backdropFilter"] : "blur(10px)", ["p"] : "5", ["borderRadius"] : "xl", ["width"] : "100%", ["transition"] : "all 0.3s ease", ["&:hover"] : ({ ["transform"] : "translateY(-2px)", ["boxShadow"] : "0 8px 24px rgba(0, 255, 255, 0.1)" }) })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "start" }),direction:"column",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray", ["fontSize"] : "0.8em", ["fontWeight"] : "600", ["textTransform"] : "uppercase", ["letterSpacing"] : "1px" })},"Cloud Fallback"),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"row",gap:"3"},jsx(LucideCloud,{css:({ ["color"] : "orange" }),size:24},),jsx(Text_0b977ca3ca62fd1251379a034ba60987,{},)))),jsx(RadixThemesBox,{css:({ ["background"] : "rgba(255, 255, 255, 0.03)", ["border"] : "1px solid rgba(255, 255, 255, 0.05)", ["backdropFilter"] : "blur(10px)", ["p"] : "5", ["borderRadius"] : "xl", ["width"] : "100%", ["transition"] : "all 0.3s ease", ["&:hover"] : ({ ["transform"] : "translateY(-2px)", ["boxShadow"] : "0 8px 24px rgba(0, 255, 255, 0.1)" }) })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "start" }),direction:"column",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray", ["fontSize"] : "0.8em", ["fontWeight"] : "600", ["textTransform"] : "uppercase", ["letterSpacing"] : "1px" })},"Calls Avoided"),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"row",gap:"3"},jsx(LucideShieldCheck,{css:({ ["color"] : "purple" }),size:24},),jsx(Text_732a5e2bdf54f36fec44b08a92c46b4b,{},)))),jsx(RadixThemesBox,{css:({ ["background"] : "rgba(255, 255, 255, 0.03)", ["border"] : "1px solid rgba(255, 255, 255, 0.05)", ["backdropFilter"] : "blur(10px)", ["p"] : "5", ["borderRadius"] : "xl", ["width"] : "100%", ["transition"] : "all 0.3s ease", ["&:hover"] : ({ ["transform"] : "translateY(-2px)", ["boxShadow"] : "0 8px 24px rgba(0, 255, 255, 0.1)" }) })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "start" }),direction:"column",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray", ["fontSize"] : "0.8em", ["fontWeight"] : "600", ["textTransform"] : "uppercase", ["letterSpacing"] : "1px" })},"Squeeze Ratio"),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"row",gap:"3"},jsx(LucidePercent,{css:({ ["color"] : "pink" }),size:24},),jsx(Text_0da7c60252cfcb538cd6505e5d9461a3,{},)))),jsx(RadixThemesBox,{css:({ ["background"] : "rgba(255, 255, 255, 0.03)", ["border"] : "1px solid rgba(255, 255, 255, 0.05)", ["backdropFilter"] : "blur(10px)", ["p"] : "5", ["borderRadius"] : "xl", ["width"] : "100%", ["transition"] : "all 0.3s ease", ["&:hover"] : ({ ["transform"] : "translateY(-2px)", ["boxShadow"] : "0 8px 24px rgba(0, 255, 255, 0.1)" }) })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "start" }),direction:"column",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray", ["fontSize"] : "0.8em", ["fontWeight"] : "600", ["textTransform"] : "uppercase", ["letterSpacing"] : "1px" })},"Cost Saved"),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"row",gap:"3"},jsx(LucideBanknote,{css:({ ["color"] : "green" }),size:24},),jsx(Text_25b04ae28441abb556a6c4fab8377d79,{},)))))),jsx(RadixThemesBox,{css:({ ["width"] : "100%" })},jsx(RadixThemesFlex,{css:({ ["alignItems"] : "center", ["marginBottom"] : "6" }),justify:"between"},jsx(RadixThemesFlex,{css:({ ["alignItems"] : "center" }),gap:"2"},jsx(LucideServer,{css:({ ["color"] : "green" }),size:28},),jsx(RadixThemesHeading,{css:({ ["fontWeight"] : "800", ["fontFamily"] : "Outfit, Inter, sans-serif", ["--default-font-family"] : "Outfit, Inter, sans-serif" }),size:"6"},"SRE Telemetry")),jsx(Button_86754b06d0c24daa01cc47a28d8e2c32,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"5"},jsx(RadixThemesBox,{css:({ ["background"] : "rgba(15, 23, 42, 0.5)", ["border"] : "1px solid rgba(255, 255, 255, 0.05)", ["backdropFilter"] : "blur(10px)", ["p"] : "5", ["borderRadius"] : "xl", ["width"] : "100%", ["boxShadow"] : "0 10px 15px -3px rgba(0, 0, 0, 0.3)", ["transition"] : "all 0.3s ease", ["&:hover"] : ({ ["border"] : "1px solid #06b6d4", ["boxShadow"] : "0 15px 30px rgba(0,0,0,0.4)" }) })},jsx(RadixThemesFlex,{css:({ ["alignItems"] : "center", ["marginBottom"] : "4" }),justify:"between"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray", ["fontWeight"] : "600", ["textTransform"] : "uppercase", ["letterSpacing"] : "1px", ["fontSize"] : "0.8em" })},"NPU Latency (ms)"),jsx(LucideActivity,{css:({ ["color"] : "#06b6d4", ["opacity"] : "0.7" }),size:18},)),jsx(Responsivecontainer_4d2a157b49b4e4ea9f5d2b830a32498a,{},)),jsx(RadixThemesBox,{css:({ ["background"] : "rgba(15, 23, 42, 0.5)", ["border"] : "1px solid rgba(255, 255, 255, 0.05)", ["backdropFilter"] : "blur(10px)", ["p"] : "5", ["borderRadius"] : "xl", ["width"] : "100%", ["boxShadow"] : "0 10px 15px -3px rgba(0, 0, 0, 0.3)", ["transition"] : "all 0.3s ease", ["&:hover"] : ({ ["border"] : "1px solid #10b981", ["boxShadow"] : "0 15px 30px rgba(0,0,0,0.4)" }) })},jsx(RadixThemesFlex,{css:({ ["alignItems"] : "center", ["marginBottom"] : "4" }),justify:"between"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray", ["fontWeight"] : "600", ["textTransform"] : "uppercase", ["letterSpacing"] : "1px", ["fontSize"] : "0.8em" })},"Local CPU Utilization %"),jsx(LucideActivity,{css:({ ["color"] : "#10b981", ["opacity"] : "0.7" }),size:18},)),jsx(Responsivecontainer_60f65274a7f67b4c910e74622c032ee0,{},)),jsx(RadixThemesBox,{css:({ ["background"] : "rgba(15, 23, 42, 0.5)", ["border"] : "1px solid rgba(255, 255, 255, 0.05)", ["backdropFilter"] : "blur(10px)", ["p"] : "5", ["borderRadius"] : "xl", ["width"] : "100%", ["boxShadow"] : "0 10px 15px -3px rgba(0, 0, 0, 0.3)", ["transition"] : "all 0.3s ease", ["&:hover"] : ({ ["border"] : "1px solid #8b5cf6", ["boxShadow"] : "0 15px 30px rgba(0,0,0,0.4)" }) })},jsx(RadixThemesFlex,{css:({ ["alignItems"] : "center", ["marginBottom"] : "4" }),justify:"between"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray", ["fontWeight"] : "600", ["textTransform"] : "uppercase", ["letterSpacing"] : "1px", ["fontSize"] : "0.8em" })},"Local RAM Load % (Optimization)"),jsx(LucideActivity,{css:({ ["color"] : "#8b5cf6", ["opacity"] : "0.7" }),size:18},)),jsx(Responsivecontainer_f172955aa2de39225ea4e28d344c46e2,{},)),jsx(RadixThemesBox,{css:({ ["background"] : "rgba(15, 23, 42, 0.5)", ["border"] : "1px solid rgba(255, 255, 255, 0.05)", ["backdropFilter"] : "blur(10px)", ["p"] : "5", ["borderRadius"] : "xl", ["width"] : "100%", ["boxShadow"] : "0 10px 15px -3px rgba(0, 0, 0, 0.3)", ["transition"] : "all 0.3s ease", ["&:hover"] : ({ ["border"] : "1px solid #f59e0b", ["boxShadow"] : "0 15px 30px rgba(0,0,0,0.4)" }) })},jsx(RadixThemesFlex,{css:({ ["alignItems"] : "center", ["marginBottom"] : "4" }),justify:"between"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray", ["fontWeight"] : "600", ["textTransform"] : "uppercase", ["letterSpacing"] : "1px", ["fontSize"] : "0.8em" })},"Cloud Token Budget"),jsx(LucideActivity,{css:({ ["color"] : "#f59e0b", ["opacity"] : "0.7" }),size:18},)),jsx(Responsivecontainer_fce5dfc4ca81764a69a82ea36003d70a,{},)),jsx(RadixThemesBox,{css:({ ["background"] : "rgba(15, 23, 42, 0.5)", ["border"] : "1px solid rgba(255, 255, 255, 0.05)", ["backdropFilter"] : "blur(10px)", ["p"] : "5", ["borderRadius"] : "xl", ["width"] : "100%", ["boxShadow"] : "0 10px 15px -3px rgba(0, 0, 0, 0.3)", ["transition"] : "all 0.3s ease", ["&:hover"] : ({ ["border"] : "1px solid #ec4899", ["boxShadow"] : "0 15px 30px rgba(0,0,0,0.4)" }) })},jsx(RadixThemesFlex,{css:({ ["alignItems"] : "center", ["marginBottom"] : "4" }),justify:"between"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray", ["fontWeight"] : "600", ["textTransform"] : "uppercase", ["letterSpacing"] : "1px", ["fontSize"] : "0.8em" })},"Inference Gateway Flow"),jsx(LucideGitMerge,{css:({ ["color"] : "#ec4899", ["opacity"] : "0.7" }),size:18},)),jsx(Responsivecontainer_801fb3ea708fbf69f91d55a85ae6df48,{},)))))))),jsx("title",{},"Ui | Telemetry"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}