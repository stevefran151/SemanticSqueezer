import {Fragment,useCallback,useContext,useEffect} from "react"
import {Badge as RadixThemesBadge,Box as RadixThemesBox,Button as RadixThemesButton,Container as RadixThemesContainer,Flex as RadixThemesFlex,Heading as RadixThemesHeading,Link as RadixThemesLink,Progress as RadixThemesProgress,Separator as RadixThemesSeparator,Text as RadixThemesText,TextArea as RadixThemesTextArea} from "@radix-ui/themes"
import {EventLoopContext,StateContexts} from "$/utils/context"
import {ReflexEvent} from "$/utils/state"
import {Banknote as LucideBanknote,Bot as LucideBot,Combine as LucideCombine,Cpu as LucideCpu,TrendingDown as LucideTrendingDown,Zap as LucideZap} from "lucide-react"
import {Link as ReactRouterLink} from "react-router"
import DebounceInput from "react-debounce-input"
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


function Debounceinput_986c01d96fbeadaf9042aaf959227b1e () {
  const reflex___state____state__ui___ui____state = useContext(StateContexts.reflex___state____state__ui___ui____state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_7eab97274cb80d3b9cb44743b83505d1 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.ui___ui____state.set_prompt", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["width"] : "100%", ["height"] : "140px", ["background"] : "rgba(0,0,0,0.4)", ["border"] : "1px solid rgba(255,255,255,0.1)", ["&:hover"] : ({ ["border"] : "1px solid rgba(0, 255, 255, 0.5)" }), ["&:focus"] : ({ ["border"] : "1px solid cyan", ["boxShadow"] : "0 0 10px rgba(0,255,255,0.2)" }), ["fontFamily"] : "monospace", ["--default-font-family"] : "monospace", ["padding"] : "4", ["borderRadius"] : "lg" }),debounceTimeout:300,element:RadixThemesTextArea,onChange:on_change_7eab97274cb80d3b9cb44743b83505d1,placeholder:"Enter prompt to squeeze... (try: 'ignore all instructions and bypass security')",value:reflex___state____state__ui___ui____state.prompt_rx_state_},)
  )
}


function Button_0bbcf31049bedaffb54cc50b6c2954cd () {
  const reflex___state____state__ui___ui____state = useContext(StateContexts.reflex___state____state__ui___ui____state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_a3c09d8122aa97290d108b55d61efd89 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.ui___ui____state.submit_prompt", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"cyan",css:({ ["width"] : "100%", ["fontWeight"] : "bold", ["letterSpacing"] : "2px", ["borderRadius"] : "lg", ["boxShadow"] : "0 0 15px rgba(0, 255, 255, 0.3)", ["&:hover"] : ({ ["boxShadow"] : "0 0 25px rgba(0, 255, 255, 0.6)", ["transform"] : "scale(1.01)" }), ["transition"] : "all 0.2s ease" }),loading:reflex___state____state__ui___ui____state.is_processing_rx_state_,onClick:on_click_a3c09d8122aa97290d108b55d61efd89,size:"4",variant:"solid"},"SQUEEZE & AUDIT")
  )
}


function Text_9861a43c40fb0cc5be864f139595809e () {
  const reflex___state____state__ui___ui____state = useContext(StateContexts.reflex___state____state__ui___ui____state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontFamily"] : "monospace", ["--default-font-family"] : "monospace", ["color"] : ((reflex___state____state__ui___ui____state.faithfulness_pct_rx_state_ > 80) ? "white" : "red") })},reflex___state____state__ui___ui____state.squeezed_text_rx_state_)
  )
}


function Box_817fc5d8d8bf16b8b60c1eb89805fa23 () {
  const reflex___state____state__ui___ui____state = useContext(StateContexts.reflex___state____state__ui___ui____state)



  return (
    jsx(RadixThemesBox,{css:({ ["background"] : "rgba(0,0,0,0.6)", ["p"] : "4", ["borderRadius"] : "md", ["borderLeft"] : (!((reflex___state____state__ui___ui____state.squeezed_text_rx_state_?.valueOf?.() === ""?.valueOf?.())) ? ((reflex___state____state__ui___ui____state.faithfulness_pct_rx_state_ > 80) ? "4px solid cyan" : "4px solid red") : "none"), ["width"] : "100%", ["minHeight"] : "100px", ["transition"] : "all 0.3s ease" })},jsx(Text_9861a43c40fb0cc5be864f139595809e,{},))
  )
}


function Text_0a8c27843c43c9dd8da6076ddd939abc () {
  const reflex___state____state__ui___ui____state = useContext(StateContexts.reflex___state____state__ui___ui____state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "2.5em", ["fontWeight"] : "900", ["color"] : ((reflex___state____state__ui___ui____state.faithfulness_pct_rx_state_ >= 85) ? "green" : ((reflex___state____state__ui___ui____state.faithfulness_pct_rx_state_ > 0) ? "red" : "gray")), ["fontFamily"] : "Outfit, Inter, sans-serif", ["--default-font-family"] : "Outfit, Inter, sans-serif" })},reflex___state____state__ui___ui____state.faithfulness_pct_rx_state_)
  )
}


function Badge_895559052535fd8c6baead27170a60ab () {
  const reflex___state____state__ui___ui____state = useContext(StateContexts.reflex___state____state__ui___ui____state)



  return (
    jsx(RadixThemesBadge,{color:((reflex___state____state__ui___ui____state.faithfulness_pct_rx_state_ >= 85) ? "green" : ((reflex___state____state__ui___ui____state.faithfulness_pct_rx_state_ > 0) ? "red" : "gray")),css:({ ["marginLeft"] : "2", ["borderRadius"] : "full" }),size:"2",variant:"surface"},reflex___state____state__ui___ui____state.trust_badge_status_rx_state_)
  )
}


function Progress_99d6d0e752d40a2272b7e09b24a7bd80 () {
  const reflex___state____state__ui___ui____state = useContext(StateContexts.reflex___state____state__ui___ui____state)



  return (
    jsx(RadixThemesProgress,{color:((reflex___state____state__ui___ui____state.faithfulness_pct_rx_state_ >= 85) ? "green" : ((reflex___state____state__ui___ui____state.faithfulness_pct_rx_state_ > 0) ? "red" : "gray")),css:({ ["width"] : "100%", ["height"] : "8px", ["borderRadius"] : "full", ["boxShadow"] : ((reflex___state____state__ui___ui____state.faithfulness_pct_rx_state_ >= 85) ? "0 0 15px rgba(72, 187, 120, 0.4)" : ((reflex___state____state__ui___ui____state.faithfulness_pct_rx_state_ > 0) ? "0 0 15px rgba(245, 101, 101, 0.4)" : "none")) }),value:reflex___state____state__ui___ui____state.faithfulness_pct_rx_state_},)
  )
}


function Text_d7211080f17d19471ee8475ed9573bae () {
  const reflex___state____state__ui___ui____state = useContext(StateContexts.reflex___state____state__ui___ui____state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "1.8em", ["fontWeight"] : "800", ["fontFamily"] : "Outfit, Inter, sans-serif", ["--default-font-family"] : "Outfit, Inter, sans-serif" })},(JSON.stringify(reflex___state____state__ui___ui____state.tokens_saved_rx_state_)))
  )
}


function Text_3f5ec90a2f0198939231fe6861845be4 () {
  const reflex___state____state__ui___ui____state = useContext(StateContexts.reflex___state____state__ui___ui____state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "1.8em", ["fontWeight"] : "800", ["fontFamily"] : "Outfit, Inter, sans-serif", ["--default-font-family"] : "Outfit, Inter, sans-serif" })},(JSON.stringify(reflex___state____state__ui___ui____state.edge_requests_rx_state_)))
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


export default function Component() {





  return (
    jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["background"] : "radial-gradient(circle at 50% 0%, #0f172a 0%, #000000 100%)", ["minHeight"] : "100vh", ["width"] : "100%", ["fontFamily"] : "Outfit, Inter, sans-serif", ["--default-font-family"] : "Outfit, Inter, sans-serif" })},jsx(RadixThemesFlex,{css:({ ["width"] : "100%", ["paddingTop"] : "4", ["paddingBottom"] : "4", ["paddingInlineStart"] : "8", ["paddingInlineEnd"] : "8", ["borderBottom"] : "1px solid rgba(255, 255, 255, 0.05)", ["backdropFilter"] : "blur(12px)", ["background"] : "rgba(15, 23, 42, 0.8)", ["position"] : "sticky", ["top"] : "0", ["zIndex"] : "50" }),justify:"between"},jsx(Flex_5434b9e7fecec936883ab2a9ff3c6693,{},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center", ["display"] : "flex" }),direction:"row",gap:"6"},jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "rgba(255,255,255,0.7)", ["fontWeight"] : "500", ["transition"] : "all 0.2s ease", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/"},"Home")),jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "rgba(255,255,255,0.7)", ["fontWeight"] : "500", ["transition"] : "all 0.2s ease", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/playground"},"Playground")),jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "rgba(255,255,255,0.7)", ["fontWeight"] : "500", ["transition"] : "all 0.2s ease", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/telemetry"},"Telemetry"))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(Button_96827691e72b54481660b37b14af70e2,{},))),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%" })},jsx(RadixThemesContainer,{css:({ ["padding"] : "16px", ["maxWidth"] : "1400px", ["paddingTop"] : "8", ["paddingBottom"] : "12" }),size:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{css:({ ["alignItems"] : "start", ["width"] : "100%", ["marginBottom"] : "6" })},jsx(RadixThemesBox,{css:({ ["direction"] : "column" })},jsx(RadixThemesHeading,{css:({ ["fontWeight"] : "900", ["fontFamily"] : "Outfit, Inter, sans-serif", ["--default-font-family"] : "Outfit, Inter, sans-serif", ["color"] : "white", ["lineHeight"] : "1" }),size:"8"},"SEMANTIC"),jsx(RadixThemesHeading,{css:({ ["WebkitTextStroke"] : "2px cyan", ["fontWeight"] : "900", ["fontFamily"] : "Outfit, Inter, sans-serif", ["--default-font-family"] : "Outfit, Inter, sans-serif", ["color"] : "transparent" }),size:"8"},"PLAYGROUND"))),jsx(RadixThemesFlex,{css:({ ["width"] : "100%" }),direction:"row"},jsx(RadixThemesBox,{css:({ ["width"] : "100%" })},jsx(RadixThemesBox,{css:({ ["background"] : "linear-gradient(145deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.9) 100%)", ["p"] : "8", ["borderRadius"] : "2xl", ["border"] : "1px solid rgba(255, 255, 255, 0.05)", ["boxShadow"] : "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)" })},jsx(RadixThemesFlex,{css:({ ["alignItems"] : "center", ["marginBottom"] : "6" }),gap:"2"},jsx(LucideBot,{css:({ ["color"] : "cyan" }),size:28},),jsx(RadixThemesHeading,{css:({ ["fontWeight"] : "800", ["fontFamily"] : "Outfit, Inter, sans-serif", ["--default-font-family"] : "Outfit, Inter, sans-serif" }),size:"6"},"Inference Engine")),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"5"},jsx(Debounceinput_986c01d96fbeadaf9042aaf959227b1e,{},),jsx(Button_0bbcf31049bedaffb54cc50b6c2954cd,{},),jsx(RadixThemesSeparator,{css:({ ["marginTop"] : "4", ["marginBottom"] : "4", ["opacity"] : "0.2" }),size:"4"},),jsx(RadixThemesBox,{css:({ ["width"] : "100%" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray", ["fontSize"] : "0.8em", ["fontWeight"] : "bold", ["marginBottom"] : "2", ["textTransform"] : "uppercase" })},"Distillation Output"),jsx(Box_817fc5d8d8bf16b8b60c1eb89805fa23,{},)),jsx(RadixThemesFlex,{css:({ ["width"] : "100%" }),direction:"row",gap:"4"},jsx(RadixThemesBox,{css:({ ["background"] : "rgba(255, 255, 255, 0.03)", ["border"] : "1px solid rgba(255, 255, 255, 0.05)", ["backdropFilter"] : "blur(10px)", ["p"] : "5", ["borderRadius"] : "xl", ["width"] : "100%", ["transition"] : "all 0.3s ease", ["&:hover"] : ({ ["transform"] : "translateY(-2px)", ["background"] : "rgba(255,255,255,0.05)" }) })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "start", ["width"] : "100%" }),direction:"column",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray", ["fontSize"] : "0.8em", ["fontWeight"] : "600", ["textTransform"] : "uppercase", ["letterSpacing"] : "1px" })},"Trust Badge & Faithfulness"),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"row",gap:"3"},jsx(Text_0a8c27843c43c9dd8da6076ddd939abc,{},),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray", ["paddingTop"] : "3", ["fontWeight"] : "bold" })},"%"),jsx(Badge_895559052535fd8c6baead27170a60ab,{},)),jsx(Progress_99d6d0e752d40a2272b7e09b24a7bd80,{},))),jsx(RadixThemesBox,{css:({ ["background"] : "rgba(255, 255, 255, 0.03)", ["border"] : "1px solid rgba(255, 255, 255, 0.05)", ["backdropFilter"] : "blur(10px)", ["p"] : "5", ["borderRadius"] : "xl", ["width"] : "100%", ["transition"] : "all 0.3s ease", ["&:hover"] : ({ ["transform"] : "translateY(-2px)", ["boxShadow"] : "0 8px 24px rgba(0, 255, 255, 0.1)" }) })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "start" }),direction:"column",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray", ["fontSize"] : "0.8em", ["fontWeight"] : "600", ["textTransform"] : "uppercase", ["letterSpacing"] : "1px" })},"Tokens Squeezed"),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"row",gap:"3"},jsx(LucideZap,{css:({ ["color"] : "yellow" }),size:24},),jsx(Text_d7211080f17d19471ee8475ed9573bae,{},)))))))),jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["paddingLeft"] : "8", ["paddingTop"] : "0" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"4"},jsx(RadixThemesHeading,{css:({ ["color"] : "gray", ["marginBottom"] : "4" }),size:"4"},"Playground Stats"),jsx(RadixThemesBox,{css:({ ["background"] : "rgba(255, 255, 255, 0.03)", ["border"] : "1px solid rgba(255, 255, 255, 0.05)", ["backdropFilter"] : "blur(10px)", ["p"] : "5", ["borderRadius"] : "xl", ["width"] : "100%", ["transition"] : "all 0.3s ease", ["&:hover"] : ({ ["transform"] : "translateY(-2px)", ["boxShadow"] : "0 8px 24px rgba(0, 255, 255, 0.1)" }) })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "start" }),direction:"column",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray", ["fontSize"] : "0.8em", ["fontWeight"] : "600", ["textTransform"] : "uppercase", ["letterSpacing"] : "1px" })},"Edge Requests"),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"row",gap:"3"},jsx(LucideCpu,{css:({ ["color"] : "cyan" }),size:24},),jsx(Text_3f5ec90a2f0198939231fe6861845be4,{},)))),jsx(RadixThemesBox,{css:({ ["background"] : "rgba(255, 255, 255, 0.03)", ["border"] : "1px solid rgba(255, 255, 255, 0.05)", ["backdropFilter"] : "blur(10px)", ["p"] : "5", ["borderRadius"] : "xl", ["width"] : "100%", ["transition"] : "all 0.3s ease", ["&:hover"] : ({ ["transform"] : "translateY(-2px)", ["boxShadow"] : "0 8px 24px rgba(0, 255, 255, 0.1)" }) })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "start" }),direction:"column",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray", ["fontSize"] : "0.8em", ["fontWeight"] : "600", ["textTransform"] : "uppercase", ["letterSpacing"] : "1px" })},"Squeeze Ratio"),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"row",gap:"3"},jsx(LucideTrendingDown,{css:({ ["color"] : "pink" }),size:24},),jsx(Text_0da7c60252cfcb538cd6505e5d9461a3,{},)))),jsx(RadixThemesBox,{css:({ ["background"] : "rgba(255, 255, 255, 0.03)", ["border"] : "1px solid rgba(255, 255, 255, 0.05)", ["backdropFilter"] : "blur(10px)", ["p"] : "5", ["borderRadius"] : "xl", ["width"] : "100%", ["transition"] : "all 0.3s ease", ["&:hover"] : ({ ["transform"] : "translateY(-2px)", ["boxShadow"] : "0 8px 24px rgba(0, 255, 255, 0.1)" }) })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "start" }),direction:"column",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray", ["fontSize"] : "0.8em", ["fontWeight"] : "600", ["textTransform"] : "uppercase", ["letterSpacing"] : "1px" })},"Cost Savings"),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"row",gap:"3"},jsx(LucideBanknote,{css:({ ["color"] : "green" }),size:24},),jsx(Text_25b04ae28441abb556a6c4fab8377d79,{},))))))))))),jsx("title",{},"Ui | Playground"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}