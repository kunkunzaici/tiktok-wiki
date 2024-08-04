"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[993],{5853:(a,n,s)=>{s.r(n),s.d(n,{data:()=>e});const e={key:"v-dacc88d0",path:"/open/userData.html",title:"用户数据",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"实例化",slug:"实例化",children:[]},{level:2,title:"获取用户视频情况",slug:"获取用户视频情况",children:[]},{level:2,title:"获取用户粉丝数",slug:"获取用户粉丝数",children:[]},{level:2,title:"获取用户点赞数",slug:"获取用户点赞数",children:[]},{level:2,title:"获取用户评论数",slug:"获取用户评论数",children:[]},{level:2,title:"获取用户分享数",slug:"获取用户分享数",children:[]},{level:2,title:"获取用户主页访问数",slug:"获取用户主页访问数",children:[]}],filePathRelative:"open/userData.md",git:{updatedTime:1642765279e3,contributors:[{name:"zhaoxiang",email:"756958008@qq.com",commits:3}]}}},5576:(a,n,s)=>{s.r(n),s.d(n,{default:()=>D});var e=s(6252);const p=(0,e.uE)('<h1 id="用户数据" tabindex="-1"><a class="header-anchor" href="#用户数据" aria-hidden="true">#</a> 用户数据</h1><h2 id="实例化" tabindex="-1"><a class="header-anchor" href="#实例化" aria-hidden="true">#</a> 实例化</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>\n<span class="token keyword">use</span> <span class="token package">EasyTiktok<span class="token punctuation">\\</span>Application</span><span class="token punctuation">;</span>\n\n<span class="token variable">$app</span> <span class="token operator">=</span> <span class="token class-name static-context">Application</span><span class="token operator">::</span><span class="token function">openPlatform</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n    <span class="token string single-quoted-string">&#39;app_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;app_id&#39;</span><span class="token punctuation">,</span>\n    <span class="token string single-quoted-string">&#39;secret&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;secret&#39;</span><span class="token punctuation">,</span>\n    <span class="token string single-quoted-string">&#39;openid&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;&#39;</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token property">user_data</span><span class="token punctuation">;</span>\n</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="获取用户视频情况" tabindex="-1"><a class="header-anchor" href="#获取用户视频情况" aria-hidden="true">#</a> 获取用户视频情况</h2>',4),t=(0,e.Uk)("🚨 使用前建议熟读 "),o={href:"https://open.douyin.com/platform/doc/6848798450331486212",target:"_blank",rel:"noopener noreferrer"},l=(0,e.Uk)("抖音开放平台文档"),r=(0,e.uE)('<p>该接口用于获取用户视频情况。</p><div class="custom-container tip"><p class="custom-container-title">注意</p><p>用户首次授权应用后，需要间隔2天才会产生全部的数据。</p></div><p>使用示例：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$data</span> <span class="token operator">=</span> <span class="token variable">$app</span><span class="token operator">-&gt;</span><span class="token function">item</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">$date_type</span> <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="获取用户粉丝数" tabindex="-1"><a class="header-anchor" href="#获取用户粉丝数" aria-hidden="true">#</a> 获取用户粉丝数</h2>',5),c=(0,e.Uk)("🚨 使用前建议熟读 "),i={href:"https://open.douyin.com/platform/doc/6848798450331453444",target:"_blank",rel:"noopener noreferrer"},u=(0,e.Uk)("抖音开放平台文档"),d=(0,e.uE)('<p>该接口用于获取用户粉丝数。</p><div class="custom-container tip"><p class="custom-container-title">注意</p><p>用户首次授权应用后，需要间隔2天才会产生全部的数据。</p></div><p>使用示例：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$data</span> <span class="token operator">=</span> <span class="token variable">$app</span><span class="token operator">-&gt;</span><span class="token function">fans</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">$date_type</span> <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="获取用户点赞数" tabindex="-1"><a class="header-anchor" href="#获取用户点赞数" aria-hidden="true">#</a> 获取用户点赞数</h2>',5),k=(0,e.Uk)("🚨 使用前建议熟读 "),h={href:"https://open.douyin.com/platform/doc/6848798450331518980",target:"_blank",rel:"noopener noreferrer"},b=(0,e.Uk)("抖音开放平台文档"),m=(0,e.uE)('<p>该接口用于获取用户点赞数。</p><div class="custom-container tip"><p class="custom-container-title">注意</p><p>用户首次授权应用后，需要间隔2天才会产生全部的数据。</p></div><p>使用示例：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$data</span> <span class="token operator">=</span> <span class="token variable">$app</span><span class="token operator">-&gt;</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">$date_type</span> <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="获取用户评论数" tabindex="-1"><a class="header-anchor" href="#获取用户评论数" aria-hidden="true">#</a> 获取用户评论数</h2>',5),g=(0,e.Uk)("🚨 使用前建议熟读 "),v={href:"https://open.douyin.com/platform/doc/6848798450331420676",target:"_blank",rel:"noopener noreferrer"},f=(0,e.Uk)("抖音开放平台文档"),_=(0,e.uE)('<p>该接口用于获取用户评论数。</p><div class="custom-container tip"><p class="custom-container-title">注意</p><p>用户首次授权应用后，需要间隔2天才会产生全部的数据。</p></div><p>使用示例：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$data</span> <span class="token operator">=</span> <span class="token variable">$app</span><span class="token operator">-&gt;</span><span class="token function">comment</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">$date_type</span> <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="获取用户分享数" tabindex="-1"><a class="header-anchor" href="#获取用户分享数" aria-hidden="true">#</a> 获取用户分享数</h2>',5),y=(0,e.Uk)("🚨 使用前建议熟读 "),$={href:"https://open.douyin.com/platform/doc/6848798471810451459",target:"_blank",rel:"noopener noreferrer"},x=(0,e.Uk)("抖音开放平台文档"),q=(0,e.uE)('<p>该接口用于获取用户分享数。</p><div class="custom-container tip"><p class="custom-container-title">注意</p><p>用户首次授权应用后，需要间隔2天才会产生全部的数据。</p></div><p>使用示例：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$data</span> <span class="token operator">=</span> <span class="token variable">$app</span><span class="token operator">-&gt;</span><span class="token function">share</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">$date_type</span> <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="获取用户主页访问数" tabindex="-1"><a class="header-anchor" href="#获取用户主页访问数" aria-hidden="true">#</a> 获取用户主页访问数</h2>',5),U=(0,e.Uk)("🚨 使用前建议熟读 "),w={href:"https://open.douyin.com/platform/doc/6848798450331551748",target:"_blank",rel:"noopener noreferrer"},E=(0,e.Uk)("抖音开放平台文档"),W=(0,e.uE)('<p>该接口用于获取用户主页访问数。</p><div class="custom-container tip"><p class="custom-container-title">注意</p><p>用户首次授权应用后，需要间隔2天才会产生全部的数据。</p></div><p>使用示例：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$data</span> <span class="token operator">=</span> <span class="token variable">$app</span><span class="token operator">-&gt;</span><span class="token function">profile</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">$date_type</span> <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',4),C={},D=(0,s(3744).Z)(C,[["render",function(a,n){const s=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[p,(0,e._)("blockquote",null,[(0,e._)("p",null,[t,(0,e._)("a",o,[l,(0,e.Wm)(s)])])]),r,(0,e._)("blockquote",null,[(0,e._)("p",null,[c,(0,e._)("a",i,[u,(0,e.Wm)(s)])])]),d,(0,e._)("blockquote",null,[(0,e._)("p",null,[k,(0,e._)("a",h,[b,(0,e.Wm)(s)])])]),m,(0,e._)("blockquote",null,[(0,e._)("p",null,[g,(0,e._)("a",v,[f,(0,e.Wm)(s)])])]),_,(0,e._)("blockquote",null,[(0,e._)("p",null,[y,(0,e._)("a",$,[x,(0,e.Wm)(s)])])]),q,(0,e._)("blockquote",null,[(0,e._)("p",null,[U,(0,e._)("a",w,[E,(0,e.Wm)(s)])])]),W],64)}]])},3744:(a,n)=>{n.Z=(a,n)=>{const s=a.__vccOpts||a;for(const[a,e]of n)s[a]=e;return s}}}]);