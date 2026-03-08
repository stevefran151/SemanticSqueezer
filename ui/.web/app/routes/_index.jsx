import {Fragment,useCallback,useContext,useEffect} from "react"
import {Badge as RadixThemesBadge,Box as RadixThemesBox,Button as RadixThemesButton,Flex as RadixThemesFlex,Grid as RadixThemesGrid,Heading as RadixThemesHeading,Progress as RadixThemesProgress,Separator as RadixThemesSeparator,Text as RadixThemesText,TextField as RadixThemesTextField} from "@radix-ui/themes"
import DebounceInput from "react-debounce-input"
import {ColorModeContext,EventLoopContext,StateContexts} from "$/utils/context"
import {ReflexEvent,isNotNullOrUndefined} from "$/utils/state"
import {PrismAsyncLight as SyntaxHighlighter} from "react-syntax-highlighter"
import oneLight from "react-syntax-highlighter/dist/esm/styles/prism/one-light"
import oneDark from "react-syntax-highlighter/dist/esm/styles/prism/one-dark"
import {Sankey} from "recharts"
import {jsx} from "@emotion/react"




function Debounceinput_8275db9045a1c460bb6c1b8b2d005693 () {
  const reflex___state____state__ui___ui____state = useContext(StateContexts.reflex___state____state__ui___ui____state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_1f254b360cd0ac06b71a22317c0ad7a3 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.ui___ui____state.set_user_prompt", ({ ["val"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["background"] : "rgba(0,0,0,0.5)", ["color"] : "white", ["borderColor"] : "gray.600", ["width"] : "100%" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_1f254b360cd0ac06b71a22317c0ad7a3,placeholder:"Enter prompt... (e.g. 'Short request' vs 'Very long complex analysis please...')",value:(isNotNullOrUndefined(reflex___state____state__ui___ui____state.user_prompt_rx_state_) ? reflex___state____state__ui___ui____state.user_prompt_rx_state_ : "")},)
  )
}


function Button_7523c32ee592861f3ac1e1654b1209d0 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_a3c09d8122aa97290d108b55d61efd89 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.ui___ui____state.submit_prompt", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "cyan", ["color"] : "black", ["&:hover"] : ({ ["background"] : "lightcyan" }) }),onClick:on_click_a3c09d8122aa97290d108b55d61efd89},"Squeeze")
  )
}


function Text_0c9093c1c6d8c0f9747d882f422a84b0 () {
  const reflex___state____state__ui___ui____state = useContext(StateContexts.reflex___state____state__ui___ui____state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["color"] : "white" })},reflex___state____state__ui___ui____state.routed_to_rx_state_)
  )
}


function Text_171153a153112b2433f180968b343a0b () {
  const reflex___state____state__ui___ui____state = useContext(StateContexts.reflex___state____state__ui___ui____state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["color"] : "white" })},reflex___state____state__ui___ui____state.inference_latency_rx_state_," ms")
  )
}


function Prismasynclight_6e6b6e257c12394ed406a1d7fed4c458 () {
  const { resolvedColorMode } = useContext(ColorModeContext)
const reflex___state____state__ui___ui____state = useContext(StateContexts.reflex___state____state__ui___ui____state)



  return (
    jsx(SyntaxHighlighter,{children:reflex___state____state__ui___ui____state.inference_result_rx_state_,css:({ ["background"] : "rgba(0,0,0,0.4)" }),language:"python",style:((resolvedColorMode?.valueOf?.() === "light"?.valueOf?.()) ? oneLight : oneDark)},)
  )
}


function Sankey_25ebefe705d3df362fe17d15f1827e57 () {
  const reflex___state____state__ui___ui____state = useContext(StateContexts.reflex___state____state__ui___ui____state)



  return (
    jsx(Sankey,{data:reflex___state____state__ui___ui____state.flow_data_rx_state_,height:300,linkColor:"cyan",nodePadding:50,nodeWidth:15,width:600},)
  )
}


function Button_e092d63f4c238d8261553d4173b7a628 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_04552b2539a008ee15878a5ef1e7fe7e = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.ui___ui____state.manual_refresh_data", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "gray.700", ["color"] : "white", ["&:hover"] : ({ ["background"] : "gray.600" }) }),onClick:on_click_04552b2539a008ee15878a5ef1e7fe7e,size:"2"},"Sync")
  )
}


function Progress_07970a32959b9133986a63396495d661 () {
  const reflex___state____state__ui___ui____state = useContext(StateContexts.reflex___state____state__ui___ui____state)



  return (
    jsx(RadixThemesProgress,{color:"cyan",css:({ ["width"] : "100px" }),value:reflex___state____state__ui___ui____state.cpu_load_edge_rx_state_},)
  )
}


function Text_92153c097ded3acc328f21f0f8ac42f8 () {
  const reflex___state____state__ui___ui____state = useContext(StateContexts.reflex___state____state__ui___ui____state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["color"] : "cyan.300", ["fontWeight"] : "bold" })},reflex___state____state__ui___ui____state.cpu_load_edge_rx_state_,"%")
  )
}


function Progress_de507a2aef3fa873e20bf14250e791a3 () {
  const reflex___state____state__ui___ui____state = useContext(StateContexts.reflex___state____state__ui___ui____state)



  return (
    jsx(RadixThemesProgress,{color:"purple",css:({ ["width"] : "100px" }),value:reflex___state____state__ui___ui____state.cpu_load_cloud_rx_state_},)
  )
}


function Text_3952648ee13289271a7c80a0a896eb76 () {
  const reflex___state____state__ui___ui____state = useContext(StateContexts.reflex___state____state__ui___ui____state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["color"] : "purple.300", ["fontWeight"] : "bold" })},reflex___state____state__ui___ui____state.cpu_load_cloud_rx_state_,"%")
  )
}


function Heading_ae863a32bda2bb53893f6771795069dd () {
  const reflex___state____state__ui___ui____state = useContext(StateContexts.reflex___state____state__ui___ui____state)



  return (
    jsx(RadixThemesHeading,{css:({ ["color"] : "red.400" })},reflex___state____state__ui___ui____state.bypass_attempts_rx_state_)
  )
}


function Heading_3011854303de490ae123a21f4e0001fd () {
  const reflex___state____state__ui___ui____state = useContext(StateContexts.reflex___state____state__ui___ui____state)



  return (
    jsx(RadixThemesHeading,{css:({ ["color"] : "green.300" })},reflex___state____state__ui___ui____state.trust_score_rx_state_)
  )
}


function Heading_14dba8cfd29a9e4fda04759ddc4c9493 () {
  const reflex___state____state__ui___ui____state = useContext(StateContexts.reflex___state____state__ui___ui____state)



  return (
    jsx(RadixThemesHeading,{css:({ ["color"] : "cyan.300" })},reflex___state____state__ui___ui____state.squeeze_ratio_pct_rx_state_,"%")
  )
}


function Heading_379975495fd1ad944619ca62ad0da81f () {
  const reflex___state____state__ui___ui____state = useContext(StateContexts.reflex___state____state__ui___ui____state)



  return (
    jsx(RadixThemesHeading,{css:({ ["color"] : "yellow.300" })},reflex___state____state__ui___ui____state.cloud_calls_avoided_rx_state_)
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx(RadixThemesBox,{},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["minHeight"] : "100vh", ["background"] : "radial-gradient(circle at top left, #1a1a2e, #0f0f1a)", ["fontFamily"] : "Inter, sans-serif", ["--default-font-family"] : "Inter, sans-serif" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["padding"] : "24px 48px", ["borderBottom"] : "1px solid rgba(255,255,255,0.1)", ["background"] : "rgba(0,0,0,0.5)", ["alignItems"] : "center" }),direction:"row",gap:"3"},jsx(RadixThemesHeading,{css:({ ["color"] : "white" }),size:"8",weight:"bold"},"Semantic Squeezer"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "3em" })},"\ud83d\udcc9"),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesBadge,{color:"green",size:"2",variant:"solid"},"Status: Auditing Active")),jsx(RadixThemesBox,{css:({ ["padding"] : "48px", ["width"] : "100%", ["maxWidth"] : "1400px", ["margin"] : "0 auto" })},jsx(RadixThemesGrid,{columns:"2",css:({ ["width"] : "100%" }),gap:"6"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"6"},jsx(RadixThemesBox,{css:({ ["background"] : "rgba(255, 255, 255, 0.05)", ["backdropFilter"] : "blur(16px)", ["border"] : "1px solid rgba(255, 255, 255, 0.1)", ["borderRadius"] : "16px", ["boxShadow"] : "0 8px 32px 0 rgba(0, 0, 0, 0.3)", ["padding"] : "24px", ["width"] : "100%", ["minWidth"] : "400px" })},jsx(RadixThemesHeading,{css:({ ["color"] : "white", ["mb"] : "4" }),size:"6"},"\ud83c\udf10 Inference Playground"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray.400", ["mb"] : "4" })},"Send a query to the aggregator. Short prompts squeeze into the edge, long ones hit the cloud."),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["mb"] : "4" }),direction:"row",gap:"3"},jsx(Debounceinput_8275db9045a1c460bb6c1b8b2d005693,{},),jsx(Button_7523c32ee592861f3ac1e1654b1209d0,{},)),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray.700", ["mb"] : "4" }),size:"4"},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "start", ["width"] : "100%" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesBadge,{color:"blue",variant:"solid"},"Route Decision:"),jsx(Text_0c9093c1c6d8c0f9747d882f422a84b0,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesBadge,{color:"green",variant:"solid"},"Latency:"),jsx(Text_171153a153112b2433f180968b343a0b,{},)),jsx(RadixThemesBox,{css:({ ["width"] : "100%" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray.400", ["fontSize"] : "sm" })},"Output:"),jsx(Prismasynclight_6e6b6e257c12394ed406a1d7fed4c458,{},)))),jsx(RadixThemesBox,{css:({ ["background"] : "rgba(255, 255, 255, 0.05)", ["backdropFilter"] : "blur(16px)", ["border"] : "1px solid rgba(255, 255, 255, 0.1)", ["borderRadius"] : "16px", ["boxShadow"] : "0 8px 32px 0 rgba(0, 0, 0, 0.3)", ["padding"] : "24px", ["width"] : "100%" })},jsx(RadixThemesHeading,{css:({ ["color"] : "white", ["mb"] : "4" }),size:"6"},"\ud83d\udcc9 Traffic Flow (Edge vs Cloud)"),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%" })},jsx(Sankey_25ebefe705d3df362fe17d15f1827e57,{},)))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"6"},jsx(RadixThemesBox,{css:({ ["background"] : "rgba(255, 255, 255, 0.05)", ["backdropFilter"] : "blur(16px)", ["border"] : "1px solid rgba(255, 255, 255, 0.1)", ["borderRadius"] : "16px", ["boxShadow"] : "0 8px 32px 0 rgba(0, 0, 0, 0.3)", ["padding"] : "24px", ["width"] : "100%" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["mb"] : "4" }),direction:"row",gap:"3"},jsx(RadixThemesHeading,{css:({ ["color"] : "white" }),size:"6"},"\ud83d\udcc8 SRE Telemetry Metrics"),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Button_e092d63f4c238d8261553d4173b7a628,{},)),jsx(RadixThemesGrid,{columns:"3",css:({ ["width"] : "100%", ["mb"] : "4" }),gap:"4"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"column",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray.400", ["fontSize"] : "sm" })},"Edge CPU Core Load"),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(Progress_07970a32959b9133986a63396495d661,{},),jsx(Text_92153c097ded3acc328f21f0f8ac42f8,{},))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"column",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray.400", ["fontSize"] : "sm" })},"Cloud Fallback Load"),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(Progress_de507a2aef3fa873e20bf14250e791a3,{},),jsx(Text_3952648ee13289271a7c80a0a896eb76,{},))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"column",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray.400", ["fontSize"] : "sm" })},"Ethical Guard Bypass"),jsx(Heading_ae863a32bda2bb53893f6771795069dd,{},))),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "gray.700", ["mb"] : "4" }),size:"4"},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray.400", ["fontSize"] : "sm" })},"Trust Score"),jsx(Heading_3011854303de490ae123a21f4e0001fd,{},)),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray.400", ["fontSize"] : "sm" })},"Squeeze Ratio"),jsx(Heading_14dba8cfd29a9e4fda04759ddc4c9493,{},)),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray.400", ["fontSize"] : "sm" })},"Cloud Calls Avoided"),jsx(Heading_379975495fd1ad944619ca62ad0da81f,{},))))))))),jsx("title",{},"Semantic Squeezer Dashboard"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}