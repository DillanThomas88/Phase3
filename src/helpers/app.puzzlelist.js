export const puzzleList = [
    {
        colors: ['bg-blue-500', 'bg-emerald-500', 'bg-amber-500', 'bg-rose-500','bg-violet-500'],
        size: ['grid-cols-5','grid-cols-6','grid-cols-7'],
        statements: [
            [{units: 4}, {units: 3}, {units: 3}],
            [{units: 5}, {units: 2}, {units: 1}],
            [{units: 3}, {units: 6}, {units: 2}]
        ],
        givens: [
            [[2,2],[3,3],[4,4],[5,5],[5,1]],
            [[5,5],[2,4],[4,3],[1,1]],
            [[6,3],[3,4],[4,7],[1,1]]
        ]
    },
]