import{x as d,z as b,y,d as m,k as h,m as E,o as g,a as v,b as n,e as r,t as c,u as i,F,i as o,l as K}from"./app.49df0957.js";import"./mitt.37bcd861.js";import"./index.d3aef844.js";import{i as f}from"./is.61f893d9.js";import"./lodash.2e85f70a.js";const _=s=>s!==void 0,D=(s,t)=>{const e=s();t&&t.length>0&&d([...b(t)],()=>{s()},{deep:!0}),_(e)&&y(e)},B=["keydown"],k=(s,t,e={})=>{const{events:p=B}=e,u=a=>{(l=>typeof l=="boolean")(s)?s&&t(a):(typeof s=="string"?[s]:[...s]).includes(a.code)&&t(a)};D(()=>(p.forEach(a=>{window.addEventListener(a,u)}),()=>{p.forEach(a=>{window.removeEventListener(a,u)})}))},w=n("h1",{id:"\u76D1\u542C\u952E\u76D8\u4E8B\u4EF6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u76D1\u542C\u952E\u76D8\u4E8B\u4EF6","aria-hidden":"true"},"#"),o(" \u76D1\u542C\u952E\u76D8\u4E8B\u4EF6")],-1),C=n("p",null,"\u8BBE\u7F6E\u9700\u8981\u76D1\u542C\u7684\u952E\u7801\uFF0C\u5F53\u6309\u4E0B\u5BF9\u5E94\u952E\u65F6\uFF0C\u89E6\u53D1\u51FD\u6570",-1),A={class:"custom-container tip"},x=n("p",{class:"custom-container-title"},"TIP",-1),P=n("p",null,"\u4E8B\u4EF6\u652F\u6301\u652F\u6301keyup\u3001keydown\u3001keypress\u4E8B\u4EF6",-1),z={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/KeyboardEvent/key",target:"_blank",rel:"noopener noreferrer"},I=o("KeyboardEvent"),N={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/KeyboardEvent/key/Key_Values",target:"_blank",rel:"noopener noreferrer"},T=o("\u7279\u6B8A\u952E"),V=n("h2",{id:"\u4EE3\u7801\u6F14\u793A",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4EE3\u7801\u6F14\u793A","aria-hidden":"true"},"#"),o(" \u4EE3\u7801\u6F14\u793A")],-1),q=n("br",null,null,-1),L=n("br",null,null,-1),M=K(`<h2 id="\u793A\u4F8B\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B\u4EE3\u7801" aria-hidden="true">#</a> \u793A\u4F8B\u4EE3\u7801</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>\u8FD9\u91CC\u662F\u4F60\u6309\u4E0B\u7684\u952E\u76D8\u2014\u2014\u5305\u542B\u4E86\u767D\u540D\u5355({{whiteKeys}})\uFF1A{{keys.whiteKey}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>\u65E0\u767D\u540D\u5355\uFF1A{{keys.allKey}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>
<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useKeyPress <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;zcomposition&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> whiteKeys <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;KeyQ&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;KeyW&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;KeyE&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;KeyR&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;KeyT&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> keys <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    whiteKey<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    allKey<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">useKeyPress</span><span class="token punctuation">(</span>
    whiteKeys<span class="token punctuation">,</span> 
    <span class="token punctuation">(</span>event<span class="token operator">:</span> KeyboardEvent<span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        keys<span class="token punctuation">.</span>whiteKey <span class="token operator">=</span> event<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">useKeyPress</span><span class="token punctuation">(</span>
    <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span>event<span class="token operator">:</span> KeyboardEvent<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u65E0\u767D\u540D\u5355&#39;</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>
        keys<span class="token punctuation">.</span>allKey <span class="token operator">=</span> event<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="interface" tabindex="-1"><a class="header-anchor" href="#interface" aria-hidden="true">#</a> Interface</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u952E\u7801</span>
<span class="token keyword">type</span> <span class="token class-name">KeyType</span> <span class="token operator">=</span> KeyboardEvent<span class="token punctuation">[</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">]</span> <span class="token operator">|</span> KeyboardEvent<span class="token punctuation">[</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// \u89E6\u53D1\u7C7B\u578B</span>
<span class="token keyword">type</span> <span class="token class-name">keyEvent</span> <span class="token operator">=</span> <span class="token string">&#39;keydown&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;keyup&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;keypress&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// \u6267\u884C\u7684\u51FD\u6570\u7C7B\u578B</span>
<span class="token keyword">type</span> <span class="token class-name">EventMethod</span> <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token operator">?</span><span class="token operator">:</span> KeyboardEvent<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token comment">// option\u9009\u9879</span>
<span class="token keyword">interface</span> <span class="token class-name">EventOption</span> <span class="token punctuation">{</span>
    events<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>keyEvent<span class="token operator">&gt;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="option" tabindex="-1"><a class="header-anchor" href="#option" aria-hidden="true">#</a> Option</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>keyCode</td><td>\u8981\u76D1\u542C\u7684key/\u662F\u5426\u5168\u90E8\u76D1\u542C</td><td>KeyType / true</td><td>-</td></tr><tr><td>method</td><td>\u8981\u6267\u884C\u7684\u65B9\u6CD5</td><td>EventMethod</td><td>-</td></tr><tr><td>option</td><td>\u914D\u7F6E\u9879</td><td>EventOption</td><td>{event: [&#39;keydown&#39;]}</td></tr></tbody></table>`,7),j=m({setup(s){const t=["KeyQ","KeyW","KeyE","KeyR","KeyT"],e=h({whiteKey:"",allKey:""});return f&&(k(t,p=>{e.whiteKey=p.key}),k(!0,p=>{console.log("\u65E0\u767D\u540D\u5355",p),e.allKey=p.key})),(p,u)=>{const a=E("ExternalLinkIcon");return g(),v(F,null,[w,C,n("div",A,[x,P,n("p",null,[n("a",z,[I,r(a)])]),n("p",null,[n("a",N,[T,r(a)])])]),V,n("div",null,[q,n("span",null,"\u8FD9\u91CC\u662F\u4F60\u6309\u4E0B\u7684\u952E\u76D8\u2014\u2014\u5305\u542B\u4E86\u767D\u540D\u5355("+c(t)+")\uFF1A"+c(i(e).whiteKey),1),L,n("span",null,"\u65E0\u767D\u540D\u5355\uFF1A"+c(i(e).allKey),1)]),M],64)}}});export{j as default};
