import{d as b,r,o as g,a as m,b as s,t as k,F,l as d}from"./app.49df0957.js";import{a as h}from"./index.4cf16fd5.js";import"./mitt.37bcd861.js";import"./index.d3aef844.js";import"./lodash.2e85f70a.js";var E=(c,a,n)=>new Promise((u,e)=>{var t=p=>{try{o(n.next(p))}catch(i){e(i)}},l=p=>{try{o(n.throw(p))}catch(i){e(i)}},o=p=>p.done?u(p.value):Promise.resolve(p.value).then(t,l);o((n=n.apply(c,a)).next())});const v=(c,a,n)=>E(globalThis,null,function*(){const u=new Date().getTime();yield c();const t=new Date().getTime()-u;t>a?n():setTimeout(()=>{n()},a-t)}),f=d('<h1 id="usewaittime" tabindex="-1"><a class="header-anchor" href="#usewaittime" aria-hidden="true">#</a> useWaitTime</h1><p>\u5F02\u6B65\u51FD\u6570\u6267\u884C\u540E\uFF0C\u5927\u4E8E\u67D0\u4E2A\u65F6\u95F4\u6267\u884C\u53E6\u4E00\u4E2A\u51FD\u6570</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u5E38\u89C1\u573A\u666F</p><blockquote><p>\u9875\u9762loading\uFF1A\u63A5\u53E3\u8BF7\u6C42\u65F6\u95F4\u592A\u5FEB\uFF0Cloading\u72B6\u6001\u53EA\u663E\u793A\u4E86\u4E00\u77AC\u95F4\uFF0C\u4F7F\u7528\u8BE5\u51FD\u6570\u53EF\u4EE5\u8BBE\u7F6E\u4E00\u4E2A\u6700\u5C0F\u65F6\u95F4\uFF0C\u7B49\u5F85\u6EE1\u8DB3\u6700\u5C0F\u65F6\u95F4\u540E\uFF0C\u518D\u5173\u95EDloading</p></blockquote></div><h2 id="\u4EE3\u7801\u6F14\u793A" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A" aria-hidden="true">#</a> \u4EE3\u7801\u6F14\u793A</h2><h3 id="\u57FA\u7840\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u7840\u4F7F\u7528</h3>',5),C=s("span",null,"\u5F53\u6EE1\u8DB3\u6700\u5C0F\u6267\u884C\u65F6\u95F4\uFF1A",-1),A=["value"],y=s("span",null,"\u540E\uFF0C\u5173\u95EDloading",-1),B=s("br",null,null,-1),D=s("br",null,null,-1),_=s("br",null,null,-1),w=s("br",null,null,-1),x=d(`<h3 id="\u793A\u4F8B\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B\u4EE3\u7801" aria-hidden="true">#</a> \u793A\u4F8B\u4EE3\u7801</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useWaitTime <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;zcomposition&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> loading <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> minTime <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">useWaitTime</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;https://v1.hitokoto.cn&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        msg<span class="token punctuation">.</span>value <span class="token operator">=</span> data<span class="token punctuation">.</span>hitokoto<span class="token punctuation">;</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token string">&#39;data&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    minTime<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>\u5F53\u6EE1\u8DB3\u6700\u5C0F\u6267\u884C\u65F6\u95F4\uFF1A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>number<span class="token punctuation">&#39;</span></span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>minTime<span class="token punctuation">&#39;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>\u540E\uFF0C\u5173\u95EDloading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\u5F53\u524Dloading\u72B6\u6001\uFF1A{{ loading }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\u63A5\u53E3\u8FD4\u56DE\uFF1A {{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>handleClick<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>\u6267\u884C\u51FD\u6570<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="option" tabindex="-1"><a class="header-anchor" href="#option" aria-hidden="true">#</a> Option</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>funAsync</td><td>\u5F02\u6B65\u51FD\u6570</td><td>() =&gt; void</td><td>-</td></tr><tr><td>time</td><td>\u6700\u5C0F\u7B49\u5F85\u65F6\u95F4</td><td>number</td><td>-</td></tr><tr><td>funThen</td><td>\u6EE1\u8DB3\u6700\u5C0F\u7B49\u5F85\u65F6\u95F4\u540E\u6267\u884C\u7684\u51FD\u6570</td><td>() =&gt; void</td><td>-</td></tr></tbody></table>`,5),N=b({setup(c){const a=r(!1),n=r(1e3),u=r(""),e=()=>{v(async()=>{a.value=!0;const{data:t}=await h.get("https://v1.hitokoto.cn");u.value=t.hitokoto,console.log(t,"data")},n.value,()=>{a.value=!1})};return(t,l)=>(g(),m(F,null,[f,s("div",null,[C,s("input",{type:"number",value:n.value,onChange:l[0]||(l[0]=o=>{n.value=o.target.value})},null,40,A),y,B,D,s("div",null,"\u5F53\u524Dloading\u72B6\u6001\uFF1A"+k(a.value),1),_,s("div",null,"\u63A5\u53E3\u8FD4\u56DE\uFF1A "+k(u.value),1),w,s("button",{onClick:e},"\u6267\u884C\u51FD\u6570")]),x],64))}});export{N as default};
