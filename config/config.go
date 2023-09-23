package config

var (
	Version       = "1.0.8"
	WireCmd       = "github.com/google/wire/cmd/wire@latest"
	NunuCmd       = "github.com/go-nunu/nunu@latest"
	RepoBase      = "https://github.com/go-nunu/nunu-layout-base.git"
	RepoAdvanced  = "https://github.com/go-nunu/nunu-layout-advanced.git"
	RunExcludeDir = ".git,.idea,tmp,vendor"
	RunIncludeExt = "go,tpl,tmpl,html,yaml,yml,toml,ini,json"
)
