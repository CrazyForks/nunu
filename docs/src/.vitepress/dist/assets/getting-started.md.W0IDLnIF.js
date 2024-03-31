import{_ as e,c as t,o as i,a4 as a,m as s,a as n}from"./chunks/framework.4aTu-Nia.js";const C=JSON.parse('{"title":"安装","description":"","frontmatter":{},"headers":[],"relativePath":"getting-started.md","filePath":"getting-started.md","lastUpdated":null}'),p={name:"getting-started.md"},o=a(`<h1 id="install" tabindex="-1">安装 <a class="header-anchor" href="#install" aria-label="Permalink to &quot;安装 {#install}&quot;">​</a></h1><p>您可以通过以下命令安装 Nunu：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> github.com/go-nunu/nunu@latest</span></span></code></pre></div><p>国内用户可以使用<code>GOPROXY</code>加速<code>go install</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ go env -w GO111MODULE=on</span></span>
<span class="line"><span>$ go env -w GOPROXY=https://goproxy.cn,direct</span></span></code></pre></div><blockquote><p><strong>tips: 如果<code>go install</code>成功，却提示找不到nunu命令，这是因为环境变量没有配置，可以把 GOBIN 目录配置到环境变量中即可</strong></p></blockquote>`,6),l=s("h1",{new:"",id:"创建新项目",tabindex:"-1"},[n("创建新项目 "),s("a",{class:"header-anchor",href:"#创建新项目","aria-label":'Permalink to "创建新项目{new}"'},"​")],-1),c=a(`<p>您可以使用以下命令创建一个新的 Golang 项目：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nunu</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> projectName</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 推荐新用户选择Advanced</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Layout</span></span></code></pre></div><p>此命令将创建一个名为 <code>projectName</code> 的目录，并在其中生成一个优雅的 Golang 项目结构。</p><p><strong>国内加速源：</strong></p><p><code>nunu new</code>默认拉取github源，你也可以使用国内加速仓库</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 使用高级模板(推荐)</span></span>
<span class="line"><span>nunu new projectName -r https://gitee.com/go-nunu/nunu-layout-advanced.git</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用基础模板</span></span>
<span class="line"><span>nunu new projectName -r https://gitee.com/go-nunu/nunu-layout-basic.git</span></span></code></pre></div><blockquote><p>Nunu内置了两种类型的Layout：</p></blockquote><ul><li><p><strong>基础模板(Basic Layout)</strong></p><p>Basic Layout 包含一个非常精简的架构目录结构，适合非常熟悉Nunu项目的开发者使用。</p></li><li><p><strong>高级模板(Advanced Layout)</strong></p><p>Advanced Layout 包含了很多Nunu的用法示例（ db、redis、 jwt、 cron、 migration等），适合开发者快速学习了解Nunu的架构思想。</p><p><strong>建议：我们推荐新手优先选择使用Advanced Layout。</strong></p></li></ul>`,8),d=s("h1",{run:"",id:"启动服务",tabindex:"-1"},[n("启动服务 "),s("a",{class:"header-anchor",href:"#启动服务","aria-label":'Permalink to "启动服务{run}"'},"​")],-1),h=a('<p>创建好项目之后，我们进入项目执行<code>nunu run</code>命令即可启动服务。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>nunu run cmd/server/main.go</span></span></code></pre></div><p>随后打开浏览器访问<code>http://localhost:8080</code>即可看到欢迎页面。</p><p>API文档地址: <code>http://127.0.0.1:8000/swagger/index.html</code></p>',4),r=[o,l,c,d,h];function u(g,_,k,b,v,m){return i(),t("div",null,r)}const F=e(p,[["render",u]]);export{C as __pageData,F as default};
