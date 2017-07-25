
module.exports = {
	app: {
		mongo: {
			hosts: [
				'handy-mandrill-mongodb-replicaset-0.handy-mandrill-mongodb-replicaset.default.svc.cluster.local:27017',
				'handy-mandrill-mongodb-replicaset-1.handy-mandrill-mongodb-replicaset.default.svc.cluster.local:27017',
				'handy-mandrill-mongodb-replicaset-2.handy-mandrill-mongodb-replicaset.default.svc.cluster.local:27017'
			],
			database: 'k8s',
			options: 'replicaSet=rs0'
		}
	}
}
