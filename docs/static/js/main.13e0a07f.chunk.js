;(this['webpackJsonpemployee-birthdays-app'] =
  this['webpackJsonpemployee-birthdays-app'] || []).push([
  [0],
  {
    42: function (e, t, n) {},
    62: function (e, t, n) {},
    65: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n(0),
        c = n.n(r),
        s = n(15),
        a = n.n(s),
        i = n(20),
        u = n(9),
        o = n(14),
        l = n(31),
        j = n(33),
        h = n(10),
        d = function (e, t) {
          localStorage.setItem(e, JSON.stringify(t))
        },
        b = 'users',
        f = 'active',
        m = 'not active',
        v = [
          'A',
          'B',
          'C',
          'D',
          'E',
          'F',
          'G',
          'H',
          'I',
          'J',
          'K',
          'L',
          'M',
          'N',
          'O',
          'P',
          'Q',
          'R',
          'S',
          'T',
          'U',
          'V',
          'W',
          'X',
          'Y',
          'Z',
        ],
        p = [
          { 1: 'January' },
          { 2: 'February' },
          { 3: 'March' },
          { 4: 'April' },
          { 5: 'May' },
          { 6: 'June' },
          { 7: 'July' },
          { 8: 'August' },
          { 9: 'September' },
          { 10: 'October' },
          { 11: 'November' },
          { 12: 'December' },
        ],
        O = function (e) {
          return e
            ? new Date(e).getUTCMonth() + 1
            : new Date().getUTCMonth() + 1
        },
        x = function (e) {
          var t = new Date(e)
          return ''
            .concat(t.getUTCDate(), ' ')
            .concat(t.toLocaleString('default', { month: 'long' }), ', ')
            .concat(t.getUTCFullYear(), ' year')
        },
        N = function (e) {
          return (function () {
            for (var e = O(), t = {}, n = 0; n < 12; n += 1)
              e + n <= 12 ? (t[e + n] = n) : (t[e + n - 12] = n)
            return t
          })()[e]
        },
        E = function (e) {
          var t
          return (
            (t =
              e[0] && e[0].active
                ? e
                : e.map(function (e) {
                    var t = O(e.dob)
                    return Object(h.a)(
                      Object(h.a)({}, e),
                      {},
                      {
                        active: m,
                        letter: e.lastName && e.lastName[0],
                        month: t,
                        indexFromCurentMonth: N(t),
                      },
                    )
                  })).sort(function (e, t) {
              var n = e.lastName,
                r = t.lastName
              return n < r ? -1 : n > r ? 1 : 0
            }),
            t
          )
        }
      var y = Object(o.b)({
          users: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case 'USERS_REQUEST_SUCCEEDED':
                var n = t.users,
                  r = E(n)
                return (
                  d(b, r), Object(h.a)(Object(h.a)({}, e), {}, { users: r })
                )
              case 'UPDATE_USERS':
                var c = t.id,
                  s = t.active,
                  a = e.users.findIndex(function (e) {
                    return e.id === c
                  }),
                  i = Object(j.a)(e.users)
                return (
                  (i[a].active = s),
                  d(b, i),
                  Object(h.a)(Object(h.a)({}, e), {}, { users: i })
                )
              default:
                return e
            }
          },
        }),
        g = [l.a],
        S = o.a.apply(void 0, g),
        U = Object(o.c)(y, { users: [] }, S),
        C = (n(42), n(3)),
        D = n(32),
        F = n.n(D),
        T = function (e) {
          return { type: 'USERS_REQUEST_SUCCEEDED', users: e }
        },
        M = function () {
          return function (e) {
            var t = (function (e) {
              var t = JSON.parse(localStorage.getItem(e))
              return 'false' === t ? (t = !1) : 'true' === t && (t = !0), t
            })(b)
            t
              ? e(T(t))
              : F.a
                  .get(
                    'https://yalantis-react-school-api.yalantis.com/api/task0/users',
                  )
                  .then(function (t) {
                    return e(T(t.data))
                  })
                  .catch(function (t) {
                    return e(
                      (function (e) {
                        return { type: 'USERS_REQUEST_FAILED', error: e }
                      })(t),
                    )
                  })
          }
        },
        I = n(1),
        R = Object(u.b)(null, function (e) {
          return {
            saveUsers: function (t, n) {
              return e(
                (function (e, t) {
                  return { type: 'UPDATE_USERS', id: e, active: t }
                })(t, n),
              )
            },
          }
        })(function (e) {
          var t = e.id,
            n = e.lastName,
            c = e.firstName,
            s = e.active,
            a = Object(r.useCallback)(function (n) {
              e.saveUsers(t, n.target.value)
            })
          return Object(I.jsxs)('li', {
            className: 'text padding-bottom',
            children: [
              ' ',
              Object(I.jsxs)('span', {
                className: ''.concat(s === f ? 'active' : ''),
                children: [n, ' ', c],
              }),
              Object(I.jsxs)('div', {
                className: 'radio padding-bottom',
                children: [
                  Object(I.jsxs)('label', {
                    className: 'padding-bottom',
                    children: [
                      Object(I.jsx)('input', {
                        type: 'radio',
                        value: m,
                        checked: s === m,
                        onChange: a,
                        className: 'radio-label',
                      }),
                      m,
                    ],
                  }),
                  Object(I.jsxs)('label', {
                    children: [
                      Object(I.jsx)('input', {
                        type: 'radio',
                        value: f,
                        checked: s === f,
                        onChange: a,
                        className: 'radio-label',
                      }),
                      f,
                    ],
                  }),
                ],
              }),
            ],
          })
        })
      var J = Object(u.b)(
          function (e) {
            return { users: e.users && e.users.users }
          },
          function (e) {
            return {
              fetchUsers: function () {
                return e(M())
              },
            }
          },
        )(function (e) {
          Object(r.useEffect)(function () {
            e.fetchUsers()
          }, [])
          return Object(I.jsx)('div', {
            children: Object(I.jsx)('ul', {
              className: 'employee-list-wrapper',
              children:
                e.users &&
                (function () {
                  var t = []
                  return (
                    e.users &&
                      v.forEach(function (n) {
                        var r = []
                        r.push(
                          Object(I.jsx)(
                            'li',
                            { className: 'text', children: n },
                            n,
                          ),
                        )
                        var c = e.users.findIndex(function (e) {
                          return e.letter === n
                        })
                        if (-1 !== c)
                          for (
                            var s = c;
                            e.users[s] && e.users[s].letter === n;

                          )
                            r.push(
                              Object(I.jsx)(
                                R,
                                {
                                  lastName: e.users[s].lastName,
                                  firstName: e.users[s].firstName,
                                  active: e.users[s].active,
                                  id: e.users[s].id,
                                },
                                e.users[s].id,
                              ),
                            ),
                              (s += 1)
                        else
                          r.push(
                            Object(I.jsxs)(
                              'li',
                              {
                                className: 'text',
                                children: [' ', '----', ' '],
                              },
                              'emploeeListEmpty'.concat(n),
                            ),
                          )
                        return (
                          t.push(
                            Object(I.jsx)('ul', {
                              className: 'employee-item',
                              children: r,
                            }),
                          ),
                          t
                        )
                      }),
                    t
                  )
                })(),
            }),
          })
        }),
        _ = n(34),
        k = function () {
          var e = Object(u.c)(function (e) {
              return e.users.users
            }),
            t = [],
            n = []
          e &&
            (t = (function (e) {
              var t = []
              return (
                Object.entries(e).forEach(function (e) {
                  var n = Object(_.a)(e, 2),
                    r = n[0],
                    c = n[1]
                  t.push(
                    Object(I.jsx)(
                      'li',
                      {
                        className: 'month-name text',
                        children: p[c[0].month - 1][c[0].month],
                      },
                      ''.concat(r).concat(c[0].id),
                    ),
                  ),
                    c.forEach(function (e) {
                      t.push(
                        Object(I.jsxs)(
                          'li',
                          {
                            className: 'text',
                            children: [
                              e.lastName,
                              ' ',
                              e.firstName,
                              ' - ',
                              x(e.dob),
                            ],
                          },
                          e.id,
                        ),
                      )
                    })
                }),
                t
              )
            })(
              (function (e) {
                var t = {}
                return (
                  p.forEach(function (n, r) {
                    var c = e.findIndex(function (e) {
                      return e.month === +Object.keys(p[r])[0]
                    })
                    if (-1 !== c) {
                      for (var s = [], a = c; e[a] && e[a].month === r + 1; )
                        s.push(e[a]), (a += 1)
                      s.sort(function (e, t) {
                        var n = e.lastName,
                          r = t.lastName
                        return n < r ? -1 : n > r ? 1 : 0
                      }),
                        (t[s[0].indexFromCurentMonth] = s)
                    }
                  }),
                  Object.entries(t).sort(function (e, t) {
                    return t[1] - e[1]
                  }),
                  t
                )
              })(
                (n = (function (e) {
                  var t = []
                  return (
                    e &&
                      0 !== e.length &&
                      e.forEach(function (e) {
                        e.active === f && t.push(e)
                      }),
                    t.sort(function (e, t) {
                      var n = e.indexFromCurentMonth,
                        r = t.indexFromCurentMonth
                      return n < r ? -1 : n > r ? 1 : 0
                    }),
                    t
                  )
                })(e)),
              ),
            ))
          return Object(I.jsxs)('div', {
            children: [
              Object(I.jsx)('h3', {
                className: 'app-header',
                children: 'Employees birthday',
              }),
              Object(I.jsx)('hr', { className: 'vertical-line' }),
              !n.length &&
                Object(I.jsx)('div', { children: 'Employees List is empty' }),
              Object(I.jsx)('ul', { children: e && t }),
            ],
          })
        }
      n(62)
      var w = Object(C.f)(function () {
          return Object(I.jsxs)('div', {
            children: [
              Object(I.jsxs)('div', {
                className: 'App',
                children: [
                  Object(I.jsxs)('div', {
                    children: [
                      Object(I.jsx)('h3', {
                        className: 'app-header',
                        children: 'Employees',
                      }),
                      Object(I.jsx)(C.c, {
                        children: Object(I.jsx)(C.a, {
                          path: '/employees',
                          component: J,
                        }),
                      }),
                    ],
                  }),
                  Object(I.jsx)('div', {
                    children: Object(I.jsx)('hr', {
                      className: 'horizontal-line',
                    }),
                  }),
                  Object(I.jsx)(k, {}),
                ],
              }),
              Object(I.jsx)('hr', { className: 'vertical-line' }),
            ],
          })
        }),
        A = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 66))
              .then(function (t) {
                var n = t.getCLS,
                  r = t.getFID,
                  c = t.getFCP,
                  s = t.getLCP,
                  a = t.getTTFB
                n(e), r(e), c(e), s(e), a(e)
              })
        }
      a.a.render(
        Object(I.jsx)(c.a.StrictMode, {
          children: Object(I.jsx)(u.a, {
            store: U,
            children: Object(I.jsx)(i.a, { children: Object(I.jsx)(w, {}) }),
          }),
        }),
        document.getElementById('root'),
      ),
        A()
    },
  },
  [[65, 1, 2]],
])
//# sourceMappingURL=main.13e0a07f.chunk.js.map
