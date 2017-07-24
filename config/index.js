
module.exports = {
	app: {
		mongo: {
			hosts: [
				'giddy-yak-mongodb-replicaset-0.giddy-yak-mongodb-replicaset.default.svc.cluster.local:27017',
				'giddy-yak-mongodb-replicaset-1.giddy-yak-mongodb-replicaset.default.svc.cluster.local:27017',
				'giddy-yak-mongodb-replicaset-2.giddy-yak-mongodb-replicaset.default.svc.cluster.local:27017'
			],
			database: 'k8s',
			options: 'replicaSet=rs0'
		}
	}
}
