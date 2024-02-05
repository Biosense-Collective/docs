(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[959],{3136:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/BFiVRC/Parameter-Schema",function(){return r(369)}])},369:function(e,s,r){"use strict";r.r(s),r.d(s,{__toc:function(){return a}});var n=r(5893),t=r(2673),i=r(2643),l=r(9013);r(2709);let a=[{depth:2,value:"OSC Avatar Parameter Schema",id:"osc-avatar-parameter-schema"},{depth:2,value:"Depracation",id:"depracation"},{depth:2,value:"Migration from Old Parameter Schema",id:"migration-from-old-parameter-schema"},{depth:2,value:"Parameter Descriptions",id:"parameter-descriptions"},{depth:3,value:"Utility",id:"utility"},{depth:3,value:"Neurofeedback",id:"neurofeedback"},{depth:3,value:"PowerBand",id:"powerband"},{depth:3,value:"Addons",id:"addons"},{depth:3,value:"Biometrics",id:"biometrics"}];function d(e){let s=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",code:"code",pre:"pre",span:"span",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3",a:"a"},(0,i.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"osc-avatar-parameter-schema",children:"OSC Avatar Parameter Schema"}),"\n",(0,n.jsx)(s.p,{children:"Here are the various avatar parameters sent to VRChat. Neurofeedback scores range from -1 to 1 for signed floats, 0 to 1 for unsigned, with higher and lower values corresponding to higher and lower relax/focus scores. Depending on the board you're using, heartrate, respiration and battery information might be available. Power Band numbers are also sent per location as well, ranging from 0 to 1 averaging at 0.2."}),"\n",(0,n.jsx)(s.p,{children:"To use these parameters within VRChat, write the parameter name as a path. For example, to get the left side alpha value, the parameter name would be:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"BFI/PwrBands/Left/Alpha"})}),"\n"]}),"\n",(0,n.jsx)(s.pre,{"data-language":"yaml","data-theme":"default",children:(0,n.jsxs)(s.code,{"data-language":"yaml","data-theme":"default",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"BFI"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"Info"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"VersionMajor [int]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"VersionMinor [int]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"SecondsSinceLastUpdate [float]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"DeviceConnected [bool]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"BatterySupported [bool]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"BatteryLevel [float]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"NeuroFB"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"FocusLeft [float]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"FocusLeftPos [float]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"FocusRight [float]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"FocusRightPos [float]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"FocusAvg [float]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"FocusAvgPos [float]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"RelaxLeft [float]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"RelaxLeftPos [float]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"RelaxRight [float]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"RelaxRightPos [float]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"RelaxAvg [float]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"RelaxAvgPos [float]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"PwrBands"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"Left"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"Alpha [float]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"Beta [float]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"Theta [float]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"Delta [float]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"Gamma [float]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"Right"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"Alpha [float]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"Beta [float]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"Theta [float]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"Delta [float]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"Gamma [float]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"Avg"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"Alpha [float]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"Beta [float]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"Theta [float]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"Delta [float]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"Gamma [float]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"Addons"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"Hueshift [float 0-1]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"Biometrics"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"Supported [bool]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"HeartBeatsPerSecond [float]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"HeartBeatsPerMinute [int]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"OxygenPercent [float]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"BreathsPerSecond [float]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    - "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"BreathsPerMinute [int]"})]})]})}),"\n",(0,n.jsx)(s.h2,{id:"depracation",children:"Depracation"}),"\n",(0,n.jsx)(l.UW,{type:"warning",emoji:"⚠️",children:(0,n.jsx)(s.p,{children:"This parameter list is deprecated and is set to be removed from the app in a future update. Please update to the new schema."})}),"\n",(0,n.jsxs)(s.p,{children:["We recommend updating to this schema. However, if your assets are still using the old parameter scheme, you can switch to them by adding the ",(0,n.jsx)(s.code,{children:"--use-old-reporter"})," launch argument. Be aware that this will be deprecated in the future and an official announcement will be made for its sunset."]}),"\n",(0,n.jsx)(s.h2,{id:"migration-from-old-parameter-schema",children:"Migration from Old Parameter Schema"}),"\n",(0,n.jsx)(s.p,{children:"Need to migrate your existing prefabs? You can convert your existing parameters to the new standard using this chart."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Old Parameter"}),(0,n.jsx)(s.th,{children:"New Parameter"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"osc_focus_left"}),(0,n.jsx)(s.td,{children:"BFI/NeuroFB/FocusLeft"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"osc_focus_right"}),(0,n.jsx)(s.td,{children:"BFI/NeuroFB/FocusRight"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"osc_focus_avg"}),(0,n.jsx)(s.td,{children:"BFI/NeuroFB/FocusAvg"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"osc_relax_left"}),(0,n.jsx)(s.td,{children:"BFI/NeuroFB/RelaxLeft"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"osc_relax_right"}),(0,n.jsx)(s.td,{children:"BFI/NeuroFB/RelaxRight"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"osc_relax_avg"}),(0,n.jsx)(s.td,{children:"BFI/NeuroFB/RelaxAvg"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"osc_heart_bpm"}),(0,n.jsx)(s.td,{children:"BFI/Biometrics/HeartBeatsPerMinute"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"osc_heart_bps"}),(0,n.jsx)(s.td,{children:"BFI/Biometrics/HeartBeatsPerSecond"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"osc_oxygen_percent"}),(0,n.jsx)(s.td,{children:"BFI/Biometrics/OxygenPercent"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"osc_respiration_bpm"}),(0,n.jsx)(s.td,{children:"BFI/Biometrics/BreathsPerMinute"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"osc_band_power_left_alpha"}),(0,n.jsx)(s.td,{children:"BFI/PwrBands/Left/Alpha"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"osc_band_power_left_beta"}),(0,n.jsx)(s.td,{children:"BFI/PwrBands/Left/Beta"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"osc_band_power_left_theta"}),(0,n.jsx)(s.td,{children:"BFI/PwrBands/Left/Theta"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"osc_band_power_left_delta"}),(0,n.jsx)(s.td,{children:"BFI/PwrBands/Left/Delta"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"osc_band_power_left_gamma"}),(0,n.jsx)(s.td,{children:"BFI/PwrBands/Left/Gamma"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"osc_band_power_right_alpha"}),(0,n.jsx)(s.td,{children:"BFI/PwrBands/Right/Alpha"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"osc_band_power_right_beta"}),(0,n.jsx)(s.td,{children:"BFI/PwrBands/Right/Beta"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"osc_band_power_right_theta"}),(0,n.jsx)(s.td,{children:"BFI/PwrBands/Right/Theta"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"osc_band_power_right_delta"}),(0,n.jsx)(s.td,{children:"BFI/PwrBands/Right/Delta"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"osc_band_power_right_gamma"}),(0,n.jsx)(s.td,{children:"BFI/PwrBands/Right/Gamma"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"osc_band_power_avg_alpha"}),(0,n.jsx)(s.td,{children:"BFI/PwrBands/Avg/Alpha"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"osc_band_power_avg_beta"}),(0,n.jsx)(s.td,{children:"BFI/PwrBands/Avg/Beta"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"osc_band_power_avg_theta"}),(0,n.jsx)(s.td,{children:"BFI/PwrBands/Avg/Theta"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"osc_band_power_avg_delta"}),(0,n.jsx)(s.td,{children:"BFI/PwrBands/Avg/Delta"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"osc_band_power_avg_gamma"}),(0,n.jsx)(s.td,{children:"BFI/PwrBands/Avg/Gamma"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"osc_battery_lvl"}),(0,n.jsx)(s.td,{children:"BFI/Info/BatteryLevel"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"osc_is_connected"}),(0,n.jsx)(s.td,{children:"BFI/Info/DeviceConnected"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"osc_time_diff"}),(0,n.jsx)(s.td,{children:"BFI/Info/SecondsSinceLastUpdate"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"HueShift"}),(0,n.jsx)(s.td,{children:"BFI/Addons/HueShift"})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"parameter-descriptions",children:"Parameter Descriptions"}),"\n",(0,n.jsx)(s.h3,{id:"utility",children:"Utility"}),"\n",(0,n.jsx)(s.p,{children:"These utility Parameters give basic information about your device and BFiVRC"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/Info/VersionMajor"}),(0,n.jsx)(s.td,{children:"The major version number of current parameter schema"}),(0,n.jsx)(s.td,{children:"Int"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/Info/VersionMinor"}),(0,n.jsx)(s.td,{children:"The minor version number of current parameter schema"}),(0,n.jsx)(s.td,{children:"Int"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/Info/SecondsSinceLastUpdate"}),(0,n.jsx)(s.td,{children:"The refresh rate of BFiVRCs data stream"}),(0,n.jsx)(s.td,{children:"Float"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/Info/DeviceConnected"}),(0,n.jsx)(s.td,{children:"The connection status of your device to BFiVRC"}),(0,n.jsx)(s.td,{children:"Bool"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/Info/BatterySupported"}),(0,n.jsx)(s.td,{children:"If your device supports sending battery status to BFiVRC"}),(0,n.jsx)(s.td,{children:"Bool"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/Info/BatteryLevel"}),(0,n.jsx)(s.td,{children:"The current charge status of your devices battery"}),(0,n.jsx)(s.td,{children:"Float"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"neurofeedback",children:"Neurofeedback"}),"\n",(0,n.jsx)(s.p,{children:"These Parameters are calculated based on your current mental state and make use of the full signed positive and negative float range."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Range"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/NeuroFB/FocusLeft"}),(0,n.jsx)(s.td,{children:"Left Unfocused to Focused"}),(0,n.jsx)(s.td,{children:"Float"}),(0,n.jsx)(s.td,{children:"[-1.0, 1.0]"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/NeuroFB/FocusRight"}),(0,n.jsx)(s.td,{children:"Right Unfocused to Focused"}),(0,n.jsx)(s.td,{children:"Float"}),(0,n.jsx)(s.td,{children:"[-1.0, 1.0]"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/NeuroFB/FocusAvg"}),(0,n.jsx)(s.td,{children:"Unfocused to Focused"}),(0,n.jsx)(s.td,{children:"Float"}),(0,n.jsx)(s.td,{children:"[-1.0, 1.0]"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/NeuroFB/RelaxLeft"}),(0,n.jsx)(s.td,{children:"Left Excited to Relaxed"}),(0,n.jsx)(s.td,{children:"Float"}),(0,n.jsx)(s.td,{children:"[-1.0, 1.0]"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/NeuroFB/RelaxRight"}),(0,n.jsx)(s.td,{children:"Right Excited to Relaxed"}),(0,n.jsx)(s.td,{children:"Float"}),(0,n.jsx)(s.td,{children:"[-1.0, 1.0]"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/NeuroFB/RelaxAvg"}),(0,n.jsx)(s.td,{children:"Excited to Relaxed"}),(0,n.jsx)(s.td,{children:"Float"}),(0,n.jsx)(s.td,{children:"[-1.0, 1.0]"})]})]})]}),"\n",(0,n.jsx)(s.p,{children:"These are the same Neurofeedback scores remapped to the positive 0 to 1 range for cases where it may be required."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Range"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/NeuroFB/FocusLeftPos"}),(0,n.jsx)(s.td,{children:"Left Unfocused to Focused"}),(0,n.jsx)(s.td,{children:"Float"}),(0,n.jsx)(s.td,{children:"[0.0, 1.0]"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/NeuroFB/FocusRightPos"}),(0,n.jsx)(s.td,{children:"Right Unfocused to Focused"}),(0,n.jsx)(s.td,{children:"Float"}),(0,n.jsx)(s.td,{children:"[0.0, 1.0]"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/NeuroFB/FocusAvgPos"}),(0,n.jsx)(s.td,{children:"Unfocused to Focused"}),(0,n.jsx)(s.td,{children:"Float"}),(0,n.jsx)(s.td,{children:"[0.0, 1.0]"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/NeuroFB/RelaxLeftPos"}),(0,n.jsx)(s.td,{children:"Left Excited to Relaxed"}),(0,n.jsx)(s.td,{children:"Float"}),(0,n.jsx)(s.td,{children:"[0.0, 1.0]"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/NeuroFB/RelaxRightPos"}),(0,n.jsx)(s.td,{children:"Right Excited to Relaxed"}),(0,n.jsx)(s.td,{children:"Float"}),(0,n.jsx)(s.td,{children:"[0.0, 1.0]"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/NeuroFB/RelaxAvgPos"}),(0,n.jsx)(s.td,{children:"Excited to Relaxed"}),(0,n.jsx)(s.td,{children:"Float"}),(0,n.jsx)(s.td,{children:"[0.0, 1.0]"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"powerband",children:"PowerBand"}),"\n",(0,n.jsxs)(s.p,{children:["These Parameters give the power value for the common frequency bands used in EEG measurements, measured per location. For more information on what each power band means, read more about it here: ",(0,n.jsx)(s.a,{href:"https://www.sciencedirect.com/topics/agricultural-and-biological-sciences/brain-waves",children:"What are Brainwaves"})]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Range"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/PwrBands/Left/Alpha"}),(0,n.jsx)(s.td,{children:"Left brainwaves Alpha band"}),(0,n.jsx)(s.td,{children:"Float"}),(0,n.jsx)(s.td,{children:"[0.0, 1.0]"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/PwrBands/Right/Alpha"}),(0,n.jsx)(s.td,{children:"Right brainwaves Alpha band"}),(0,n.jsx)(s.td,{children:"Float"}),(0,n.jsx)(s.td,{children:"[0.0, 1.0]"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/PwrBands/Avg/Alpha"}),(0,n.jsx)(s.td,{children:"Brainwaves Alpha band"}),(0,n.jsx)(s.td,{children:"Float"}),(0,n.jsx)(s.td,{children:"[0.0, 1.0]"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/PwrBands/Left/Beta"}),(0,n.jsx)(s.td,{children:"Left brainwaves Beta band"}),(0,n.jsx)(s.td,{children:"Float"}),(0,n.jsx)(s.td,{children:"[0.0, 1.0]"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/PwrBands/Right/Beta"}),(0,n.jsx)(s.td,{children:"Right brainwaves Beta band"}),(0,n.jsx)(s.td,{children:"Float"}),(0,n.jsx)(s.td,{children:"[0.0, 1.0]"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/PwrBands/Avg/Beta"}),(0,n.jsx)(s.td,{children:"Brainwaves Beta band"}),(0,n.jsx)(s.td,{children:"Float"}),(0,n.jsx)(s.td,{children:"[0.0, 1.0]"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/PwrBands/Left/Theta"}),(0,n.jsx)(s.td,{children:"Left brainwaves Theta band"}),(0,n.jsx)(s.td,{children:"Float"}),(0,n.jsx)(s.td,{children:"[0.0, 1.0]"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/PwrBands/Right/Theta"}),(0,n.jsx)(s.td,{children:"Right brainwaves Theta band"}),(0,n.jsx)(s.td,{children:"Float"}),(0,n.jsx)(s.td,{children:"[0.0, 1.0]"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/PwrBands/Avg/Theta"}),(0,n.jsx)(s.td,{children:"Brainwaves Theta band"}),(0,n.jsx)(s.td,{children:"Float"}),(0,n.jsx)(s.td,{children:"[0.0, 1.0]"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/PwrBands/Left/Delta"}),(0,n.jsx)(s.td,{children:"Left brainwaves Delta band"}),(0,n.jsx)(s.td,{children:"Float"}),(0,n.jsx)(s.td,{children:"[0.0, 1.0]"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/PwrBands/Right/Delta"}),(0,n.jsx)(s.td,{children:"Right brainwaves Delta band"}),(0,n.jsx)(s.td,{children:"Float"}),(0,n.jsx)(s.td,{children:"[0.0, 1.0]"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/PwrBands/Avg/Delta"}),(0,n.jsx)(s.td,{children:"Brainwaves Delta band"}),(0,n.jsx)(s.td,{children:"Float"}),(0,n.jsx)(s.td,{children:"[0.0, 1.0]"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/PwrBands/Left/Gamma"}),(0,n.jsx)(s.td,{children:"Left brainwaves Gamma band"}),(0,n.jsx)(s.td,{children:"Float"}),(0,n.jsx)(s.td,{children:"[0.0, 1.0]"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/PwrBands/Right/Gamma"}),(0,n.jsx)(s.td,{children:"Right brainwaves Gamma band"}),(0,n.jsx)(s.td,{children:"Float"}),(0,n.jsx)(s.td,{children:"[0.0, 1.0]"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/PwrBands/Avg/Gamma"}),(0,n.jsx)(s.td,{children:"Brainwaves Gamma band"}),(0,n.jsx)(s.td,{children:"Float"}),(0,n.jsx)(s.td,{children:"[0.0, 1.0]"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"addons",children:"Addons"}),"\n",(0,n.jsx)(s.p,{children:"These Parameters are additional functions of BFiVRC"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Range"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/Addons/Hueshift"}),(0,n.jsx)(s.td,{children:"This Parameter uses combinations of relax/focus to drive a single float Parameter for material fx"}),(0,n.jsx)(s.td,{children:"Float"}),(0,n.jsx)(s.td,{children:"[0.0, 1.0]"})]})})]}),"\n",(0,n.jsx)(s.h3,{id:"biometrics",children:"Biometrics"}),"\n",(0,n.jsx)(s.p,{children:"These Parameters read other biometric data from your device if supported by your hardware"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Range"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/Biometrics/Supported"}),(0,n.jsx)(s.td,{children:"If your hardware supports heart rate and respiration readouts"}),(0,n.jsx)(s.td,{children:"Bool"}),(0,n.jsx)(s.td,{children:"True/False"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/Biometrics/HeartBeatsPerSecond"}),(0,n.jsx)(s.td,{children:"Your heartrate calculated per second"}),(0,n.jsx)(s.td,{children:"Float"}),(0,n.jsx)(s.td,{children:"[0.0, inf)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/Biometrics/HeartBeatsPerMinute"}),(0,n.jsx)(s.td,{children:"Your heartrate calculated per minute"}),(0,n.jsx)(s.td,{children:"Int"}),(0,n.jsx)(s.td,{children:"[0, 255]"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/Biometrics/OxygenPercent"}),(0,n.jsx)(s.td,{children:"Percentage of oxygen in blood"}),(0,n.jsx)(s.td,{children:"Float"}),(0,n.jsx)(s.td,{children:"[0.0, 1.0]"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/Biometrics/BreathsPerSecond"}),(0,n.jsx)(s.td,{children:"Estimated breaths taken per second"}),(0,n.jsx)(s.td,{children:"Float"}),(0,n.jsx)(s.td,{children:"[0.0, inf)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BFI/Biometrics/BreathsPerMinute"}),(0,n.jsx)(s.td,{children:"Estimated breaths taken per minute"}),(0,n.jsx)(s.td,{children:"Int"}),(0,n.jsx)(s.td,{children:"[0, 255]"})]})]})]})]})}s.default=(0,t.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.a)(),e.components);return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/BFiVRC/Parameter-Schema.mdx",route:"/BFiVRC/Parameter-Schema",timestamp:1707153636e3,title:"Parameter Schema",headings:a},pageNextRoute:"/BFiVRC/Parameter-Schema"})}},function(e){e.O(0,[673,888,774,179],function(){return e(e.s=3136)}),_N_E=e.O()}]);