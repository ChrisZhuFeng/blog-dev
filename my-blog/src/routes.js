import Addblog from './components/Addblog'
import Showblogs from './components/Showblogs'
import SingleBlog from './components/SingleBlog'
import EditBlog from './components/EditBlog'

export const routes = [
    {
        path: '/',
        name: 'showblogs',
        component: Showblogs
    },
    {
        path: '/addblog',
        name: 'addblog',
        component: Addblog
    },
    {
        path: '/blog/:id',
        name: 'singleblog',
        component: SingleBlog
    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: EditBlog
    },
    {
        path: '*',
        redirect: '/'
    }
]
