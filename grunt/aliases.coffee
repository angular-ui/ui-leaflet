module.exports =
    test:[ 'jshint', 'testunit', 'teste2e']

    testunit: ['karma']

    teste2e:[ 'shell:protractor_update', 'connect:testserver', 'protractor:run']

    teste2efirefox:[ 'shell:protractor_update', 'connect:testserver', 'protractor:firefox']

    testcoverage: ['karma']

    coverage:['karma', 'open:coverage', 'connect:coverage']

    install:[ 'shell:npm_install','bower:install','shell:protractor_update']

    default:['build']

    # cause zsh always puts me in grunt folder
    d:['default']

    #force:on to keep failing specs from killing grunt
    dev:['force:on', 'connect:devserver', 'open:devserver', 'concurrent:dev' ]

    #continuos running specs
    spec: [ 'fastbuild', 'concurrent:unit' ]

    serve:['concurrent:watchServe']

    s:['serve']

    fastbuild:[ 'clean:dist', 'jshint' ,'babel', 'concat:dist', 'concat:distMapped', 'ngAnnotate']

    dwatch:[ 'fastbuild', 'concurrent:unit' ]

    build:[ 'fastbuild', 'uglify', 'testunit', 'concat:license', 'clean:pre' ]

    travis:[ 'fastbuild', 'bower:install', 'testunit' ]

    changelog: ['conventionalChangelog']

    'bump@':[ 'bumponly', 'default', 'changelog', 'bumpcommit' ]

    'bump@minor':[ 'bumponly:minor', 'default', 'changelog', 'bumpcommit' ]

    'bump@major':[ 'bumponly:major', 'default', 'changelog', 'bumpcommit' ]
    #To Update examples for Viewer
    examples:[ 'shell:examples', 'concat:examples' ]

    graph:['angular_architecture_graph']

    website:['concurrent:website']
